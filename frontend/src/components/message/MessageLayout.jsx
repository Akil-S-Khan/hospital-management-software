import React from "react";
import ChatList from "./ChatList";
import ChatBox from "./ChatBox";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MessageLayout = () => {
  const [conversationData, setConversationData] = useState();
  const [messageData, setMessageData] = useState();
  const [userId, setUserId] = useState();
  const [convoId, setConvoId] = useState();
  const [receiverId, setReceiverId] = useState();

  useEffect(() => {
    const localUserId = localStorage.getItem("userId");
    setUserId(localUserId);
    GetConversations(localUserId);
  }, []);

  const GetConversations = (userId) => {
    axios
      .get(`http://localhost:8000/api/conversation/${userId}`)
      .then((res) => {
        console.log("conversation Data", res.data);
        setConversationData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetMessages = (conversationId) => {
    axios
      .get(`http://localhost:8000/api/message/${conversationId}`)
      .then((res) => {
        console.log("Message Data", res.data);
        setMessageData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickConversation = (conversationId, id) => {
    setConvoId(conversationId);
    setReceiverId(id);
    GetMessages(conversationId);
  };

  return (
    <div className="container-fluid ">
      <div
        className="d-flex  rounded "
        style={{
          height: "85vh",
          gap: "15px",
        }}
      >
        <div
          style={{
            flex: "0 0 25%", // takes 25% of width
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            overflowY: "auto",
          }}
        >
          <ChatList
            conversationData={conversationData}
            handleClickConversation={handleClickConversation}
            userId={userId}
            GetConversations={GetConversations}
          />
        </div>

        <div
          style={{
            flex: "1", // takes remaining width
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <ChatBox
            messageData={messageData}
            userId={userId}
            conversationId={convoId}
            receiverId={receiverId}
            setMessageData={setMessageData}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageLayout;
