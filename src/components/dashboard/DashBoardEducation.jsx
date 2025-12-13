import React from "react";

const DashBoardEducation = () => {
  const contents = [
    { title: "4 Nutrition to take daily", author: "Vaishu", img: "/diet.jpeg" },
    { title: "6 Healthy Lifestyle tips", author: "Vaishu", img: "/yoga.jpeg" },
    { title: "Healthy habits to follow", author: "Vaishu", img: "/hygine.jpg" },
  ];

  return (
    <div className="p-3 shadow-lg bg-white rounded" style={{ width: "29.8%" }}>
      <h5 className="mb-3">Education Content</h5>
      <div className="overflow-auto" style={{ maxHeight: "27vh" }}>
        <ul className="list-unstyled m-0 p-0">
          {contents.map((content, index) => (
            <li
              key={index}
              className="d-flex align-items-center justify-content-between py-2 border-bottom"
            >
              <div className="d-flex align-items-center">
                <img
                  src={content.img}
                  alt={content.title}
                  className="rounded-circle"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ms-1">
                  <div className="fw-semibold">{content.title}</div>
                  <div className="text-muted small">By {content.author}</div>
                </div>
              </div>

              <button className="btn btn-primary btn-sm" style={{ width: "70px", marginTop: "-5px" }}>
                Assign
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashBoardEducation;
