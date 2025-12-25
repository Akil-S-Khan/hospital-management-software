import React from "react";

//Modal Component Start
const DoctorInfoModal = ({ infoName, infoDesignation, infoDescription }) => {
  return (
    <div
      className="modal fade"
      id="infoModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="infoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">

          {/*  Modal Header */}
          <div className="modal-header bg-primary text-light">
            <h5 className="modal-title" id="infoModalLabel">
              Doctor Information
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body text-center">
         
            <img
              src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg"
              alt="Doctor"
              className="rounded-circle mb-3"
              style={{ width: 100, height: 100 }}
            />

            {/* Doctor Name */}
            <h5>{infoName}</h5>

            {/* Doctor Designation */}
            <p className="text-muted">{infoDesignation}</p>

            {/* Doctor Description */}
            <p>{infoDescription}</p>
          </div>

          {/*  Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfoModal;
