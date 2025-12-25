import axios from "axios";
import { useEffect, useState } from "react";

const DashboardAppointment = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    GetAppointment();
  }, []);

  const GetAppointment = () => {
    axios
      .get(`http://localhost:8000/api/dashboard`)
      .then((res) => {
        console.log(res.data);
        setAppointmentList(res.data.appointmentList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Patient</th>
                {/* <th scope="col">Doctor</th> */}
              </tr>
            </thead>
            <tbody>
              {appointmentList.length > 0 ? (
                appointmentList.map((app) => (
                  <tr key={app?._id}>
                    <td>{app?.date}</td>
                    <td>{app?.time}</td>
                    <td>{app?.name}</td>
                  </tr>
                ))
              ) : (
                <li className="text-center text-muted py-2">
                  No pending Doctor Fees found
                </li>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardAppointment;
