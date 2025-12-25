import React from "react";
import { CgProfile } from "react-icons/cg";

const DashboardAppointments = () => {
  return (
    <div
      className="dashboardAppointmentParentContainer shadow-lg rounded p-3 ms-2 bg-white"
      style={{ width: "67.6%" }}
    >
      <div>
        <h5>Appointments</h5>
      </div>
      <div>
        <div style={{ height: "30vh", overflowX: "hidden", overflowY: "auto" }}>
          <table className="table table-hover mt-0">
            <thead
              style={{ position: "sticky", top: "0", background: "white" }}
            >
              <tr>
                <th scope="col">Time</th>
                <th scope="col">Date</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Doctor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                  {" "}
                  <CgProfile className="me-1" size={20} /> John
                </td>
                <td>Rahul</td>
              </tr>
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                  <CgProfile className="me-1" size={20} /> John
                </td>
                <td>Rahul</td>
              </tr>{" "}
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                  <CgProfile className="me-1" size={20} /> John
                </td>
                <td>Rahul</td>
              </tr>{" "}
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                  <CgProfile className="me-1" size={20} /> John
                </td>
                <td>Rahul</td>
              </tr>{" "}
              <tr>
                <td>9 AM - 10 AM</td>
                <td>27/11/2025</td>
                <td>
                  <CgProfile className="me-1" size={20} /> John
                </td>
                <td>Rahul</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardAppointments;
