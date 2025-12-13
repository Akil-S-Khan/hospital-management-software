import React from "react";

const DashBoardPatientfee = () => {
  const patients = [
    { name: "Ashna Anjum", img: "/person1.jpg" },
    { name: "Ayushi Talewar", img: "/person2.jpg" },
    { name: "Huma Khan", img: "/person3.jpg" },
  ];

  return (
    <div className="p-3 shadow-lg bg-white rounded" style={{ width: "29.8%" }}>
      <h5 className="mb-3">Patient Fees</h5>
      <div className="overflow-auto" style={{ maxHeight: "27vh" }}>
        <ul className="list-unstyled m-0 p-0">
          {patients.map((patient, index) => (
            <li
              key={index}
              className="d-flex align-items-center justify-content-between py-2 border-bottom"
            >
              <div className="d-flex align-items-center">
                <img
                  src={patient.img}
                  alt={patient.name}
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ms-2">
                  <div className="fw-semibold">{patient.name}</div>
                  <div className="text-danger small">Doctor fees pending</div>
                </div>
              </div>

              <button className="btn btn-primary btn-sm" style={{ width: "110px" }}>
                Request fees
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashBoardPatientfee;
