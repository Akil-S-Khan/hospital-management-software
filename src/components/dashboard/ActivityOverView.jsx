import React from "react";
import { IoDocument } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { RiMedicineBottleFill } from "react-icons/ri";
import { GiTestTubes } from "react-icons/gi";
import { VscBook } from "react-icons/vsc";

const ActivityOverView = () => {
  return (
    <div
      className="activityOverviewParentContainer shadow-lg rounded p-3 bg-white h-100"
      style={{ width: "30%" }}
    >
      {/* title and dropdown */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Activity Overview</h5>

        <div className="btn-group">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Daily</a></li>
            <li><a className="dropdown-item" href="#">Weekly</a></li>
            <li><a className="dropdown-item" href="#">Monthly</a></li>
            <li><a className="dropdown-item" href="#">Yearly</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">All</a></li>
          </ul>
        </div>
      </div>

      {/* FLEX CONTAINER */}
      <div className="d-flex flex-wrap ">

        {/* FIRST */}
        <div
          className="activityOverViewContainer1 d-flex flex-column justify-content-center align-items-center h-25 w-50 p-3"
          style={{ border: "5px solid white" }}
        >
          <IoDocument size={25} />
          <div className="fw-bold">25</div>
          <div>Appointment</div>
        </div>

        {/* SECOND */}
        <div
          className="activityOverViewContainer2 d-flex flex-column justify-content-center align-items-center h-25 w-50 p-3"
          style={{ border: "5px solid white" }}
        >
          <IoPeople size={25} />
          <div className="fw-bold">50</div>
          <div>Patient</div>
        </div>

        {/* THIRD */}
        <div
          className="activityOverViewContainer3 d-flex flex-column justify-content-center align-items-center h-25 w-50 p-3"
          style={{ border: "5px solid white" }}
        >
          <RiMedicineBottleFill size={25} />
          <div className="fw-bold">800</div>
          <div>Medicine Sold</div>
        </div>

        {/* FOURTH */}
        <div
          className="activityOverViewContainer4 d-flex flex-column justify-content-center align-items-center h-25 w-50 p-3"
          style={{ border: "5px solid white" }}
        >
          <VscBook size={25} />
          <div className="fw-bold">30</div>
          <div>Education Content</div>
        </div>

      </div>
    </div>
  );
};

export default ActivityOverView;
