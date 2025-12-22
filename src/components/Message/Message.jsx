import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FiSend } from "react-icons/fi";

import ashna from "../../../public/ashna.jpg";
import huma from "../../../public/huma.jpg";
import darshan from "../../../public/darshan.jpg";
import aman from "../../../public/aman.jpg";
import vaishu from "../../../public/vaishu.jpg";

const Message = () => {
  const [selectedUser, setSelectedUser] = useState("ashna");

  return (
    <div className="d-flex w-100 h-100" style={{ marginTop: "20px" }}>
      {/* LEFT PANEL */}
      <div
        className="border-end shadow-lg"
        style={{
          width: "30%",
          background: "white",
          padding: "10px",
          height: "90%",
          marginRight: "10px",
          marginLeft: "30px",
          borderRadius: "12px",
        }}
      >
        {/* SEARCH */}
        <div className="p-3 border-bottom">
          <InputGroup>
            <Form.Control placeholder="Search" />
          </InputGroup>
        </div>

        {/* USER LIST — NO MAPPING */}
        <div className="list-group list-group-flush">
          {/* USER 1 */}
          <div
            className="list-group-item list-group-item-action d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedUser("ashna")}
          >
            <img src={ashna} className="rounded-circle me-3" width="45" height="45" />
            <div>
              <h6 className="m-0 fw-bold">Ashna Anjum</h6>
              <small className="text-muted">Sent attachment</small>
            </div>
            <span className="ms-auto small text-muted">9:00am</span>
          </div>

          {/* USER 2 */}
          <div
            className="list-group-item list-group-item-action d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedUser("huma")}
          >
            <img src={huma} className="rounded-circle me-3" width="45" height="45" />
            <div>
              <h6 className="m-0 fw-bold">Huma Khan</h6>
              <small className="text-muted">Sent message</small>
            </div>
            <span className="ms-auto small text-muted">8:40am</span>
          </div>

          {/* USER 3 */}
          <div
            className="list-group-item list-group-item-action d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedUser("darshan")}
          >
            <img src={darshan} className="rounded-circle me-3" width="45" height="45" />
            <div>
              <h6 className="m-0 fw-bold">Darshan Talewar</h6>
              <small className="text-muted">Sent message</small>
            </div>
            <span className="ms-auto small text-muted">7:50am</span>
          </div>

          {/* USER 4 */}
          <div
            className="list-group-item list-group-item-action d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedUser("aman")}
          >
            <img src={aman} className="rounded-circle me-3" width="45" height="45" />
            <div>
              <h6 className="m-0 fw-bold">Aman Hiranwar</h6>
              <small className="text-muted">Sent message</small>
            </div>
            <span className="ms-auto small text-muted">6:20am</span>
          </div>

          {/* USER 5 */}
          <div
            className="list-group-item list-group-item-action d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedUser("vaishu")}
          >
            <img src={vaishu} className="rounded-circle me-3" width="45" height="45" />
            <div>
              <h6 className="m-0 fw-bold">Vaishu Talewar</h6>
              <small className="text-muted">Sent message</small>
            </div>
            <span className="ms-auto small text-muted">5:00am</span>
          </div>
        </div>
      </div>

      {/* CHAT AREA */}
      <div
        className="flex-grow-1 d-flex flex-column shadow-lg"
        style={{
          background: "white",
          height: "90%",
          marginRight: "20px",
          borderRadius: "12px",
          overflow: "hidden",
          
        }}
      >
        {/* HEADER CHANGES BY CLICK */}
        <div
          className="d-flex align-items-center p-3 border-bottom"
          style={{
            backgroundColor: "#247CFF",
            color: "white",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        >
          {selectedUser === "ashna" && (
            <>
              <img src={ashna} className="rounded-circle me-3" width="45" height="45" />
              <div>
                <h6 className="m-0 fw-bold">Ashna Anjum</h6>
                <small className="text-success text-white">Online</small>
              </div>
            </>
          )}

          {selectedUser === "huma" && (
            <>
              <img src={huma} className="rounded-circle me-3" width="45" height="45" />
              <div>
                <h6 className="m-0 fw-bold">Huma Khan</h6>
                <small className="text-success text-white">Online</small>
              </div>
            </>
          )}

          {selectedUser === "darshan" && (
            <>
              <img src={darshan} className="rounded-circle me-3" width="45" height="45" />
              <div>
                <h6 className="m-0 fw-bold">Darshan Talewar</h6>
                <small className="text-success text-white">Online</small>
              </div>
            </>
          )}

          {selectedUser === "aman" && (
            <>
              <img src={aman} className="rounded-circle me-3" width="45" height="45" />
              <div>
                <h6 className="m-0 fw-bold">Aman Hiranwar</h6>
                <small className="text-success text-white">Online</small>
              </div>
            </>
          )}

          {selectedUser === "vaishu" && (
            <>
              <img src={vaishu} className="rounded-circle me-3" width="45" height="45" />
              <div>
                <h6 className="m-0 fw-bold">Vaishu Talewar</h6>
                <small className="text-success text-white">Online</small>
              </div>
            </>
          )}
        </div>

        {/* CHAT MESSAGES */}
        <div className="flex-grow-1 p-3" style={{ overflowY: "auto" }}>
          {/* ---------- ASHNA CHAT ---------- */}
          {selectedUser === "ashna" && (
            <>
              <div className="mb-3">
                <div className="p-3 bg-white rounded" style={{ maxWidth: "60%" }}>
                  Hi I need to meet Dr. Vaishu Tomorrow urgently.
                </div>
                <small className="text-muted">11:20pm</small>
              </div>
              <div className="mb-3 text-end">
                <div
                  className="p-3 text-white rounded ms-auto"
                  style={{ maxWidth: "40%", background: "#247CFF" }}
                >
                  All appointments are full. I can put you on the list.
                </div>
                <small className="text-muted">11:25pm</small>
              </div>
            </>
          )}

          {/* ---------- HUMA CHAT ---------- */}
          {selectedUser === "huma" && (
            <>
              <div className="mb-3">
                <div className="p-3 bg-white rounded" style={{ maxWidth: "40%" }}>
                  Hello, I need appointment!
                </div>
                <small className="text-muted">10:15pm</small>
              </div>
              <div className="mb-3 text-end">
                <div
                  className="p-3 text-white rounded ms-auto"
                  style={{ maxWidth: "40%", background: "#247CFF" }}
                >
                  Hello Mam! From which dr do you need appointment
                </div>
                <small className="text-muted">10:17pm</small>
              </div>
            </>
          )}

          {/* ---------- DARSHAN CHAT ---------- */}
          {selectedUser === "darshan" && (
            <>
              <div className="mb-3">
                <div className="p-3 bg-white rounded" style={{ maxWidth: "40%" }}>
                  Bhai appointment chahiye urgently.
                </div>
                <small className="text-muted">9:00pm</small>
              </div>
            </>
          )}

          {/* ---------- AMAN CHAT ---------- */}
          {selectedUser === "aman" && (
            <>
              <div className="mb-3">
                <div className="p-3 bg-white rounded" style={{ maxWidth: "40%" }}>
                  Hello doctor available?
                </div>
                <small className="text-muted">8:00pm</small>
              </div>
            </>
          )}

          {/* ---------- VAISHU CHAT ---------- */}
          {selectedUser === "vaishu" && (
            <>
              <div className="mb-3">
                <div className="p-3 bg-white rounded" style={{ maxWidth: "40%" }}>
                  Hey are you there?
                </div>
                <small className="text-muted">6:30pm</small>
              </div>
            </>
          )}
        </div>

        {/* CHAT INPUT */}
        <div
          className="p-3 border-top bg-white d-flex align-items-center"
          style={{ borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }}
        >
          <Form.Control placeholder="Type a message" className="me-2" />
          <button className="send-btn d-flex align-items-center justify-content-center text-white">
            <FiSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
