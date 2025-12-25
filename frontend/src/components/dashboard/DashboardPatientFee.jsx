import React, { useEffect, useState } from "react";
import variables from "../../utils/variables";
import axios from "axios";

const DashboardPatientFee = () => {
  const [doctorsFeesList, setDoctorsFeesList] = useState([]);

  useEffect(() => {
    GetDoctorsFees();
  }, []);

  const GetDoctorsFees = () => {
    axios
      .get(`${variables.base_url}/api/dashboard`)
      .then((res) => {
        console.log(res.data);
        setDoctorsFeesList(res.data.doctorsFeesList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div
      className="p-3 shadow-lg bg-white rounded "
      style={{ width: "30%" }}
    >
      <div>
        <h5>Patient Fee</h5>
      </div>

      <div className="mt-2" style={{ height: "30vh", overflowX: "hidden", overflowY: "auto" }}>
        <ul
          style={{
            listStyle: "none",
          }}
          className="ps-0 "
        >
          {doctorsFeesList.length > 0 ? (
            doctorsFeesList.map((app) => (

              <li key={app?._id}
                className="w-100 d-flex justify-content-between align-items-center py-2"
                style={{ borderBottom: "1px solid grey" }}
              >
                <div className="d-flex align-items-center">
                  {/* Image  */}
                  <div>
                    <img
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                      src={
                        app?.image ||
                        "https://cdn-icons-png.freepik.com/512/6069/6069202.png"}
                      alt="Diet Plan"
                    />
                  </div>
                  {/* Title */}
                  <div className="ms-2">
                    <div className="educationContentTitle">{app?.name}</div>
                    <div className="educationContentSubTitle text-danger">
                      Doctors fee pending
                    </div>
                  </div>
                </div>

                <button className="btn btn-primary">Request Fee</button>
              </li>
            ))
          ) : (
            <li className="text-center text-muted py-2">
              No pending Doctor Fees found
            </li>
          )}

        </ul>
      </div>
    </div >
  );
};

export default DashboardPatientFee;
