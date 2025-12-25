import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import variables from "../../utils/variables";
import axios from "axios";
import { useEffect } from "react";

const ChatList = ({
  conversationData,
  handleClickConversation,
  userId,
  GetConversations,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patientData, setPatientData] = useState();

  console.log("conversationData", conversationData);

  useEffect(() => {
    GetPatients();
  }, []);

  const GetPatients = () => {
    axios
      .get(`${variables.base_url}/api/patients`)
      .then((res) => {
        console.log("Patients Data", res.data);
        setPatientData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newConversation = (receiverId) => {
    console.log("Check this data", userId, receiverId);
    axios
      .post(`${variables.base_url}/api/new-message`, {
        conversationId: null,
        senderId: userId,
        message: "New",
        receiverId: receiverId,
      })
      .then((res) => {
        console.log("new Message & Conversation Data", res.data);
        GetConversations(userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filteredChats = conversationData?.filter((chat) =>
    searchTerm !== ""
      ? chat.user.name.toLowerCase().includes(searchTerm.toLowerCase())
      : chat
  );

  return (
    <div className="container py-4" style={{ maxWidth: "500px" }}>
      {/*  Search Box */}
      <div
        className="input-group mb-0 rounded-4 overflow-hidden shadow-sm"
        style={{ backgroundColor: "#f1f3f5" }}
      >
        <span className="input-group-text bg-transparent border-0">
          <i className="bi bi-search text-secondary"></i>
        </span>
        <input
          type="text"
          className="form-control border-0 bg-transparent"
          placeholder="Search chats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/*  Chat List */}
      <div className="bg-white shadow-sm mt-5">
        <ul className="list-group list-group-flush">
          {filteredChats?.length > 0 ? (
            filteredChats.map((chat, index) => (
              <li
                key={chat.id}
                className={`list-group-item d-flex align-items-center justify-content-between ${
                  index !== filteredChats?.length - 1
                    ? "border-bottom"
                    : "border-0"
                }`}
                onClick={() =>
                  handleClickConversation(chat.conversationId, chat.user.id)
                }
                style={{
                  cursor: "pointer",
                  borderLeft: "none",
                  borderRight: "none",
                  borderTop: "none",
                  padding: "15px 18px",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f8f9fa")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://cdn-icons-png.freepik.com/512/6069/6069202.png"
                    alt="avatar"
                    className="rounded-circle me-3 border"
                    width="48"
                    height="48"
                  />
                  <div>
                    <h6 className="mb-1 fw-semibold">{chat.user.name}</h6>
                    {/* <small className="text-muted">{chat.lastMessage}</small> */}
                  </div>
                </div>
                {/* <small className="text-secondary">{chat.time}</small> */}
              </li>
            ))
          ) : (
            <li className="list-group-item text-center text-muted border-0 py-3">
              No chats found
            </li>
          )}
        </ul>
      </div>
      <div className="d-flex justify-content-center h-75">
        <button
          className="btn btn-dark w-75 m-2 "
          data-bs-toggle="modal"
          data-bs-target="#newChatModal"
        >
          New Chat
        </button>
      </div>
      <div
        class="modal fade"
        id="newChatModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Start New Chat
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ul
                className="list-group list-group-flush"
                style={{ listStyle: "none" }}
              >
                {patientData?.patients?.map((patient, index) => (
                  <li
                    onClick={() => newConversation(patient?._id)}
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className={`list-group-item d-flex align-items-center justify-content-between ${
                      index !== patientData?.patients?.length - 1
                        ? "border-bottom"
                        : "border-0"
                    }`}
                    style={{
                      cursor: "pointer",
                      borderLeft: "none",
                      borderRight: "none",
                      borderTop: "none",
                      padding: "15px 18px",
                      transition: "background-color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f8f9fa")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src="https://cdn-icons-png.freepik.com/512/6069/6069202.png"
                        alt="User Avatar"
                        className="rounded-circle me-3"
                        width="48"
                        height="48"
                      />
                      <div>
                        <h6 className="mb-1 fw-semibold">{patient?.name}</h6>
                        <small className="text-muted">{patient?.phone}</small>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
