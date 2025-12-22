import React from "react";
import { MdOutlinePerson } from "react-icons/md";

const DashAppointment = () => {
  const appointments = [
    { time: "10 AM - 11 AM", date: "09/10/2025", patient: "Vaishnavi", doctor: "Dr. Ashna" },
    { time: "9 AM - 10 AM", date: "09/10/2025", patient: "Huma", doctor: "Dr. Vaishnavi" },
    { time: "9 AM - 10 AM", date: "09/10/2025", patient: "Aman", doctor: "Dr. Vaishnavi" },
    { time: "9 AM - 10 AM", date: "09/10/2025", patient: "Ayushi", doctor: "Dr. Akki" },
    { time: "9 AM - 10 AM", date: "09/10/2025", patient: "Vaishu", doctor: "Dr. Aman" },
  ];

  return (
    <div
      className="shadow-lg rounded p-3 ms-2 bg-white"
      style={{ width: "67.6%" }}
    >
      <h5 className="mb-3">Appointment</h5>

      <div className="table-responsive" style={{ maxHeight: "30vh", overflowY: "auto" }}>
        <table className="table table-hover mb-0">
          <thead className="table-light sticky-top">
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Date</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Doctor</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app, index) => (
              <tr key={index}>
                <td>{app.time}</td>
                <td>{app.date}</td>
                <td>
                  <MdOutlinePerson size={20} className="me-1" />
                  {app.patient}
                </td>
                <td>{app.doctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashAppointment;
