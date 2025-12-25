import { TbMessageCircleFilled } from "react-icons/tb";
import { BsInfoLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Patient = () => {
  return (
    <>
      <div className="w-100 h-100 shadow-lg rounded pt-4 px-4 ms-2 bg-white  overflow-scroll">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Patients</h5>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#patientsModal"
            type="button"
          >
            <FaPlus /> New Patient
          </button>
        </div>

        <hr />

        <div className="d-flex  align-items-center">
          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-color searchInputBorder"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search"
              style={{ borderRadius: 25 }}
            />
          </div>
        </div>

        <div>
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th scope="col">Patient Name</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Phone No</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    style={{ width: 30, height: 30, borderRadius: 50 }}
                    src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Diet Plan"
                  />
                  <span className="ms-2"> abc name </span>
                </td>
                <td>age 33</td>
                <td>gender male</td>
                <td>blood_group</td>
                <td>phone</td>
                <td>mail</td>
                <td className="d-flex align-items-center">
                  <button className="btn btn-primary  mx-1">
                    <TbMessageCircleFilled size={20} />
                  </button>

                  <button className="btn btn-outline-success mx-1">
                    <FaEdit size={20} />
                  </button>

                  <button className="btn btn-outline-danger mx-1">
                    <IoMdClose size={20} />
                  </button>

                  <button className="btn btn-outline-primary mx-1">
                    <BsInfoLg size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Patient;
