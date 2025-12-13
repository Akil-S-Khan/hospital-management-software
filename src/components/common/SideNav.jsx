// SideNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSpeedometer } from "react-icons/io";
import { IoDocumentText, IoPeople, IoSchoolSharp, IoSettings, IoLogOut } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { GiMedicinePills } from "react-icons/gi";

const SideNav = () => {
  return (
    <nav
      className="d-flex flex-column vh-100 bg-light text-dark p-3"
      style={{ width: "240px" }}
    >
      <div className="mb-4 text-center">
        <img src="logo.png" alt="logo" className="img-fluid" />
      </div>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-4">
          <NavLink
            to="/dashboard"
            className="nav-link text-dark"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#e9ecef" } : undefined
            }
          >
            <IoIosSpeedometer className="me-2" />
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-4">
          <NavLink
            to="/patient"
            className="nav-link text-dark"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#e9ecef" } : undefined
            }
          >
            <IoPeople className="me-2" />
            Patient
          </NavLink>
        </li>

        <li className="nav-item mb-4">
          <NavLink
            to="/Appointments"
            className="nav-link text-dark"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#e9ecef" } : undefined
            }
          >
            <IoDocumentText className="me-2" />
            Appointment
          </NavLink>
        </li>

        <li className="nav-item mb-4">
          <NavLink
            to="/Doctor"
            className="nav-link text-dark"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#e9ecef" } : undefined
            }
          >
            <FaUserDoctor className="me-2" />
            Doctor
          </NavLink>
        </li>

        <li className="nav-item mb-4">
          <NavLink
            to="/Messages"
            className="nav-link text-dark"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#e9ecef" } : undefined
            }
          >
            <BiSolidMessageSquareDots className="me-2" />
            Messages
          </NavLink>
        </li>

        <li className="nav-item mb-4">
          <NavLink
            to="/Education-Content"
            className="nav-link text-dark"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#e9ecef" } : undefined
            }
          >
            <IoSchoolSharp className="me-2" />
            Education Content
          </NavLink>
        </li>

        <li className="nav-item mb-4">
          <NavLink
            to="/Medicine-Inventory"
            className="nav-link text-dark"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#e9ecef" } : undefined
            }
          >
            <GiMedicinePills className="me-2" />
            Medicine Inventory
          </NavLink>
        </li>

        <li className="nav-item mb-4">
          <NavLink
            to="/Settings"
            className="nav-link text-dark"
            style={({ isActive }) =>
              isActive ? { backgroundColor: "#e9ecef" } : undefined
            }
          >
            <IoSettings className="me-2" />
            Settings
          </NavLink>
        </li>
      </ul>

      <div className="mt-auto">
        <NavLink to="/" className="btn btn-outline-danger w-100">
          <IoLogOut className="me-2" />
          Logout
        </NavLink>
      </div>
    </nav>
  );
};

export default SideNav;
