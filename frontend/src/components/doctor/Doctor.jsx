import { BsInfoLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import DoctorInfoModal from "./doctorInfoModal";

const Doctor = () => {
  const [doctorData, setDoctorData] = useState([]);

  const [name, setName] = useState();
  const [doctorId, setDoctorId] = useState();
  const [age, setAge] = useState();
  const [designation, setDesignation] = useState();
  const [phone, setPhone] = useState();

  const [description, setDescription] = useState("");
  const [infoName, setInfoName] = useState("");
  const [infoDesignation, setInfoDesignation] = useState("");
  const [infoDescription, setInfoDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    GetDoctors();
  }, []);

  const GetDoctors = () => {
    axios
      .get(`http://localhost:8000/api/doctors`)
      .then((res) => {
        console.log(res.data);
        setDoctorData(res.data?.doctors || res.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Add Doctor API
  const AddDoctors = () => {
    axios
      .post(`http://localhost:8000/api/add-doctors`, {
        name: name,
        age: age,
        designation: designation,
        phone: phone,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
        GetDoctors();
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        resetForm();
      });
  };

  // Delete Doctor API
  const DeleteDoctor = (_id) => {
    axios
      .delete(`http://localhost:8000/api/delete-doctors?_id=${_id}`)
      .then((res) => {
        console.log(res.data);
        GetDoctors();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Update Doctor API
  const EditDoctors = () => {
    axios
      .put(`http://localhost:8000/api/edit-doctors`, {
        id: doctorId,
        name: name,
        age: age,
        designation: designation,
        phone: phone,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
        GetDoctors();
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        resetForm();
      });
  };

  // Reset Form
  const resetForm = () => {
    setName("");
    setAge("");
    setDesignation("");
    setPhone("");
    setDescription("");
    setIsEdit(false);
  };

  // Handle edit
  const handleEdit = (doctor) => {
    setDoctorId(doctor._id);
    setName(doctor.name);
    setAge(doctor.age);
    setDesignation(doctor.designation);
    setPhone(doctor.phone);
    setDescription(doctor.description || "");
    setIsEdit(true);
  };

  const handleInfo = (doctor) => {
    setInfoName(doctor.name);
    setInfoDesignation(doctor.designation);
    setInfoDescription(doctor.description || "No description available");
  };

  //  Search bar
  const filteredDoctors = doctorData.filter(
    (doctor) =>
      doctor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.type?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="w-80 shadow-lg rounded p-4 bg-white  overflow-scroll">
        <div className="d-flex justify-content-between align-items-center ">
          <h5>Doctors Info</h5>
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#doctorsModal"
            type="button"
          >
            <FaPlus className="me-1 " />
            New Doctor
          </button>
        </div>

        <hr />

        {/*Search */}
        <div className="d-flex  align-items-center">
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-color searchInputBorder"
              aria-describedby="emailHelp"
              placeholder="Search"
              style={{ borderRadius: 25 }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Data of Doctors */}
        <div
          className="table-responsive "
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th scope="col">Doctor Name</th>
                <th scope="col">Age</th>
                <th scope="col">Designation</th>
                <th scope="col">Phone No</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
                  <tr key={doctor._id}>
                    <td>
                      <img
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Doctor"
                      />
                      <span className="ms-2">{doctor?.name}</span>
                    </td>
                    <td>{doctor?.age}</td>
                    <td>{doctor?.designation}</td>
                    <td>{doctor?.phone}</td>

                    <td>
                      {/* 🗑️ edit Button */}
                      <button
                        className="btn btn-outline-success mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#doctorsModal"
                        onClick={() => handleEdit(doctor)}
                      >
                        <FaEdit size={20} />
                      </button>

                      <button
                        className="btn btn-outline-primary mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#infoModal"
                        onClick={() => handleInfo(doctor)}
                      >
                        <BsInfoLg size={20} />
                      </button>
                      {/* 🗑️ Delete Button */}
                      <button
                        className="btn btn-outline-danger mx-1"
                        onClick={() => DeleteDoctor(doctor._id)}
                      >
                        <IoMdClose size={20} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No doctors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals here */}
      <div
        className="modal fade"
        id="doctorsModal"
        tabIndex="-1"
        aria-labelledby="doctorModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="doctorModalLabel">
                {isEdit ? "Edit doctor" : "Add new doctor"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetForm}
              ></button>
            </div>

            <div className="modal-body">
              <form>
                {/* Input Fied */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Doctor Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                  />
                </div>
                {/* Input Fied */}
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Age"
                  />
                </div>
                {/* Input Fied */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>

                {/* Input Fied */}
                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    Designation
                  </label>
                  <input
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    type="text"
                    className="form-control"
                    id="designation"
                    placeholder="Designation"
                  />
                </div>

                {/* 🟡 Added Description Input */}
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    id="description"
                    rows="3"
                    placeholder="Doctor Description"
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={resetForm}
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={isEdit ? EditDoctors : AddDoctors}
              >
                {isEdit ? "Edit Doctors" : "Add Doctors"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🟡 Added Info Modal */}
      <DoctorInfoModal
        infoName={infoName}
        infoDesignation={infoDesignation}
        infoDescription={infoDescription}
      />
    </>
  );
};

export default Doctor;
