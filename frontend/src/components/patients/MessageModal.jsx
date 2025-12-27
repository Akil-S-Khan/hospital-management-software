import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPaperclip, FaPaperPlane, FaSmile } from "react-icons/fa";

const MessageModal = () => {
  return (
    <>
      {/* Message Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* Scrollable Content */}
        <div
          className="modal-dialog modal-dialog-scrollable position-fixed bottom-0 end-0  me-5 mb-2 text-white ps-5 pe-5 rounded"
          style={{ height: "58vh", width: "35vw" }}
        >
          <div className="modal-content rounded-top-4">
            <div
              className="modal-header justify-content-between pt-2 px-3 pb-1"
              style={{ backgroundColor: "#3497F9" }}
            >
              <div className="d-flex">
                <div>
                  <img
                    src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="User"
                    className="rounded-circle mt-2"
                    width="30"
                    height="30"
                  />
                </div>
                <div className="ms-4">
                  <h6 className="modal-title text-white" id="exampleModalLabel">
                    Akil Khan
                  </h6>
                  <small className="text-white">Online</small>
                </div>
              </div>
              <div className="d-flex align-self-auto">
                <div className="pb-1">
                  <button
                    className="text-light"
                    style={{ borderStyle: "none", backgroundColor: "#3497F9" }}
                  >
                    <BsThreeDotsVertical size={23} />
                  </button>
                </div>
                <div className="pt-1">
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="modal-body">
              <div
                className="flex-grow-1"
                style={{ backgroundColor: "#f8f9fa", overflowY: "auto" }}
              >
                {/* 1st message */}

                <div className="chat-message mb-2">
                  <div
                    className="p-2 b rounded"
                    style={{ maxWidth: "70%", backgroundColor: "#EAEDEE" }}
                  >
                    Hi I need to meet Dr.Strange Tomorrow Urgently, Please
                    arrange appointment.
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

                {/* 2nd message */}
                <div className="d-flex justify-content-end">
                  <div
                    className="p-2 rounded-3  text-white"
                    style={{ maxWidth: "70%", backgroundColor: "#3497F9" }}
                  >
                    I will Confirm with Doctor and then inform you.
                  </div>
                </div>
                <div
                  className="text-end text-muted"
                  style={{
                    fontSize: "0.7rem",
                    marginTop: "10px",
                    marginRight: "5px",
                  }}
                >
                  10:30 AM
                </div>

                {/* 3rd message */}
                <div className="chat-message mb-2">
                  <div
                    className="p-2 b rounded"
                    style={{ maxWidth: "70%", backgroundColor: "#EAEDEE" }}
                  >
                    Yes Please
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
              </div>
            </div>

            {/* Input Box */}
            <div className="modal-footer">
              <div className="border-top d-flex align-items-center bg-white">
                <div className="input-group">
                  {/* Emoji Icon on left */}
                  <button className="input-group-text bg-white border-end-0">
                    <FaSmile size={25} style={{ color: "#C8CBCD" }} />
                  </button>

                  {/* Input Box */}
                  <input
                    type="text"
                    className="form-control border-start-0 border-end-0"
                    placeholder="Type a message..."
                  />

                  {/* Attachment and Send Icons on right */}
                  <span className="input-group-text bg-white border-start-0 d-flex gap-3 align-items-center">
                    <button
                      style={{ borderStyle: "none", backgroundColor: "white" }}
                    >
                      <FaPaperclip
                        size={22}
                        className="me-2"
                        style={{ color: "#96999C" }}
                      />
                    </button>
                    <button
                      style={{ borderStyle: "none", backgroundColor: "white" }}
                    >
                      <FaPaperPlane size={22} style={{ color: "#3497F9" }} />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageModal;
