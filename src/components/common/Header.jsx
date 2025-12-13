import React from "react";
import { IoIosNotifications } from "react-icons/io";

const Header = ({ title }) => {
  return (
    <div className="d-flex justify-content-between align-items-center px-2 py-2 bg-color">
      <div>
        <h3>{title}</h3>
      </div>

      <div className="d-flex align-items-center">
        <div className="me-2">
          <IoIosNotifications size={30} />
        </div>

        {/* Profile Image */}
        <div className="d-flex align-items-center">
          <img
            src="/me2.jpeg"   // <-- yaha apni image ka path do
            alt="profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <div className="ms-2">
            <div>Vaishnavi Talewar</div>
            <div>Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
