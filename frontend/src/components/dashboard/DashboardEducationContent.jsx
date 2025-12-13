import React from "react";

const DashboardEducationContent = () => {
  return (
    <div
      className="p-3  shadow-lg  bg-white rounded"
      style={{ width: "29.8%" }}
    >
      <div>
        <h5>Education Content</h5>
      </div>
      <div
        className="mt-2"
        style={{ height: "30vh", overflowX: "hidden", overflowY: "auto" }}
      >
        <ul
          style={{
            listStyle: "none",
          }}
          className="ps-0 "
        >
          <li
            className="w-100 d-flex justify-content-between align-items-center py-2 "
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* Image of Education Content */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  src="https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?cs=srgb&dl=pexels-janetrangdoan-1105166.jpg&fm=jpg"
                  alt=""
                />
              </div>
              {/* Title & Subtitle of Education Content */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">
                  4 Nutrition to take daily
                </div>
                <div className="educationContentSubTitle">By John Doe</div>
              </div>
            </div>
            <button class="btn btn-primary">Assign</button>
          </li>
          <li
            className="w-100 d-flex justify-content-between align-items-center py-2 "
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* Image of Education Content */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  src="https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?cs=srgb&dl=pexels-janetrangdoan-1105166.jpg&fm=jpg"
                  alt=""
                />
              </div>
              {/* Title & Subtitle of Education Content */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">
                  4 Nutritions to take daily
                </div>
                <div className="educationContentSubTitle">By John Doe</div>
              </div>
            </div>
            <button class="btn btn-primary">Assign</button>
          </li>{" "}
          <li
            className="w-100 d-flex justify-content-between align-items-center py-2 "
            style={{ borderBottom: "1px solid grey" }}
          >
            {/* Image of Education Content */}
            <div className="d-flex align-items-center">
              <div>
                <img
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                  src="https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?cs=srgb&dl=pexels-janetrangdoan-1105166.jpg&fm=jpg"
                  alt=""
                />
              </div>
              {/* Title & Subtitle of Education Content */}
              <div className={"ms-2"}>
                <div className="educationContentTitle">
                  4 Nutritions to take daily
                </div>
                <div className="educationContentSubTitle">By John Doe</div>
              </div>
            </div>
            <button class="btn btn-primary">Assign</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardEducationContent;
