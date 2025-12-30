import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSmile, FaPaperPlane } from "react-icons/fa";
import { io } from "socket.io-client";
import variables from "../../utils/variables";
const ChatBox = ({
  setMessageData,
  messageData,
  userId,
  conversationId,
  receiverId,
}) => {
  const [userMessage, setUserMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io(`${variables.base_url}`));
  }, []);

  useEffect(() => {
    socket?.emit("addUser", userId);
    socket?.on("getUsers", (users) => {
      console.log(users);
    });
    socket?.on("getMessage", (data) => {
      setMessageData((prev) => [
        ...prev,
        { user: data?.user, message: data?.message },
      ]);
    });
  }, [socket]);

  const newMessage = () => {
    socket?.emit("sendMessage", {
      conversationId: conversationId,
      senderId: userId,
      message: userMessage,
      receiverId: receiverId,
    });

    axios
      .post(`${variables.base_url}/api/new-message`, {
        conversationId: conversationId,
        senderId: userId,
        message: userMessage,
        receiverId: receiverId,
      })
      .then((res) => {
        console.log("conversation Data", res.data);
        setUserMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("This is message data", messageData);
  return (
    <div
      className="d-flex flex-column bg-white"
      style={{ height: "80vh", borderLeft: "1px solid #eee" }}
    >
      {/* Header */}
      <div
        className="d-flex align-items-center justify-content-between rounded-top-4  p-3 border-bottom"
        style={{ backgroundColor: "#3497F9", height: "60px", width: "100%" }}
      >
        {/* Left: User Info */}
        <div className="d-flex align-items-center">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User"
            className="rounded-circle me-2"
            width="45"
            height="45"
          />
          <div className="text-light ms-2">
            <h6 className="mb-0 fw-semibold">John Doe</h6>
            <small>Online</small>
          </div>
        </div>

        {/* Right: 3-dot vertical menu */}
        <div className="text-light" style={{ cursor: "pointer" }}>
          <BsThreeDotsVertical size={22} />
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-grow-1 p-3"
        style={{ backgroundColor: "#f8f9fa", overflowY: "auto" }}
      >
        <div className="d-flex justify-content-center mb-3">
          <div
            className="p-2 rounded-3 text-dark"
            style={{ maxWidth: "70%", backgroundColor: "#E8F3FF" }}
          >
            Today
          </div>
        </div>

        {/* 1st message */}

        {messageData?.map((message) =>
          message?.user?.id == userId ? (
            <div>
              {console.log(message?.user?.id + "==" + userId)}
              <div className="d-flex justify-content-end mt-2">
                <div
                  className="p-2 rounded-3  text-white"
                  style={{ maxWidth: "70%", backgroundColor: "#3497F9" }}
                >
                  <small>{message?.user?.name}</small>
                  <div>{message?.message}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="chat-message mb-2">
              {console.log(message?.user?.id + "=!=" + userId)}
              <div
                className="p-2 b rounded"
                style={{ maxWidth: "20%", backgroundColor: "#EAEDEE" }}
              >
                <small>{message?.user?.name}</small>
                <div>{message?.message}</div>
              </div>
              <div
                className="text-start text-muted"
                style={{
                  fontSize: "0.7rem",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              >
                10:30 AM
              </div>
            </div>
          )
        )}
      </div>

      {/* Input Box */}
      <div className="border-top p-3 d-flex align-items-center bg-white ">
        <div className="input-group me-2">
          {/* Emoji Icon on left */}
          <span className="input-group-text bg-white border-end-0">
            <FaSmile size={25} style={{ color: "#C8CBCD" }} />
          </span>

          {/* Input Box */}
          <input
            type="text"
            className="form-control border-start-0 border-end-0"
            placeholder="Type a message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />

          {/* Attachment and Send Icons on right */}
        </div>
        <span className="input-group-text bg-white border-start-0 d-flex gap-3 align-items-center p-0">
          {/* <FaPaperclip
            size={22}
            className="me-2"
            style={{ cursor: "pointer", color: "#96999C" }}
          /> */}
          <button className="btn btn-white" onClick={newMessage}>
            <FaPaperPlane
              size={18}
              style={{ cursor: "pointer", color: "#3497F9" }}
            />
          </button>
        </span>
      </div>
    </div>
  );
};

export default ChatBox;
