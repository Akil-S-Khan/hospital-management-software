import axios from "axios";
import { useEffect, useState } from "react";
import variables from "../../utils/variables";

const DashboardEducationContent = () => {
  const [educationContents, setEducationContents] = useState([]);

  useEffect(() => {
    GetEducationContents();
  }, [])

  const GetEducationContents = () => {
    axios
      .get(`${variables.base_url}/api/dashboard`)
      .then((res) => {
        console.log(res.data);
        setEducationContents(res.data.educationContents);
      })
      .catch((err) => {
        console.log(err)
      });
  }
  return (
    <div
      className="p-3  shadow-lg  bg-white rounded"
      style={{ width: "29.8%" }}
    >
      <div>
        <h5>Education Content</h5>
      </div>
      <div className="mt-2" style={{ height: "30vh", overflowX: "hidden", overflowY: "auto" }}>
        <ul
          style={{
            listStyle: "none",
          }}
          className="ps-0 "
        >
          {educationContents.length > 0 ? (
            educationContents.map((app) => (

              <li key={app?._id}
                className="w-100 d-flex justify-content-between align-items-center py-2 "
                style={{ borderBottom: "1px solid grey" }}
              >
                {/* Image of Education Content */}
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                      src={app?.image ||
                        "https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?cs=srgb&dl=pexels-janetrangdoan-1105166.jpg&fm=jpg"}
                      alt="Diet Plan"
                    />
                  </div>
                  {/* Title & Subtitle of Education Content */}
                  <div className={"ms-2"}>
                    <div className="educationContentTitle">
                      {app?.title}
                    </div>
                    <div className="educationContentSubTitle">{app?.createdBy}</div>
                  </div>
                </div>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Assign
                </button>
              </li>
            ))
          ) : (
            <li className="text-center text-muted py-2">
              No Contents
            </li>
          )}


        </ul>
      </div>

      {/* Modal Code */}
      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content w-75">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Share Education Content</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
              <input className='mb-2 search-field bg-color w-100 input-field ' type="search" placeholder='Search' />
              <div className='modal-dialog-scrollable h-25 pe-3'>
                <div className='modal-data d-flex justify-content-between align-items-center py-3'>
                  <div>
                    <h6 className='modal-data'>< img className='me-3' src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80" alt="" />Elizabeth Polson</h6>
                  </div>
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  </div>

                </div>
                <div className='modal-data d-flex justify-content-between align-items-center py-2'>
                  <div>
                    <h6 className='modal-data'>< img className='me-3' src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80" alt="" />EG Subramani</h6>
                  </div>
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  </div>

                </div>

                <div className='modal-data d-flex justify-content-between align-items-center py-2'>
                  <div>
                    <h6 className='modal-data'>< img className='me-3' src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80" alt="" />John David</h6>
                  </div>
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  </div>

                </div>

                <div className='modal-data d-flex justify-content-between align-items-center py-2'>
                  <div>
                    <h6 className='modal-data'>< img className='me-3' src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80" alt="" />Krishtav Rajan</h6>
                  </div>
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  </div>

                </div>

                <div className='modal-data d-flex justify-content-between align-items-center py-2'>
                  <div>
                    <h6 className='modal-data'>< img className='me-3' src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80" alt="" />Sumanth Tinson</h6>
                  </div>
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  </div>

                </div>

                <div className='modal-data d-flex justify-content-between align-items-center py-2'>
                  <div>
                    <h6 className='modal-data'>< img className='me-3' src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80" alt="" />Salman Sheikh</h6>
                  </div>
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  </div>

                </div>


                <div className='modal-data d-flex justify-content-between align-items-center py-2'>
                  <div>
                    <h6 className='modal-data'>< img className='me-3' src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80" alt="" />Salman Sheikh</h6>
                  </div>
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  </div>

                </div>


                <div className='modal-data d-flex justify-content-between align-items-center py-2'>
                  <div>
                    <h6 className='modal-data'>< img className='me-3' src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80" alt="" />Salman Sheikh</h6>
                  </div>
                  <div>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                  </div>

                </div>
              </div>


              <div class="modal-footer">
                <button type="button" class="btn w-100   modal-btn btn-primary">Assign Ed Content</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardEducationContent;