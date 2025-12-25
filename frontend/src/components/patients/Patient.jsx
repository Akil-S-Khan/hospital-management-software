import { TbMessageCircleFilled } from "react-icons/tb";
import { BsInfoLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useEffect } from "react";
import axios from "axios";
import variables from "../../utils/variables";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import MessageModal from "./MessageModal";
import { FaEdit } from "react-icons/fa";

const Patient = () => {
  const [patientData, setPatientData] = useState();

  const [name, setName] = useState();
  const [patientId, setPatientId] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetPatients();
  }, []);

  const GetPatients = () => {
    axios
      .get(`${variables.base_url}/api/patients`)
      .then((res) => {
        console.log(res.data);
        setPatientData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddPatients = () => {
    axios
      .post(`${variables.base_url}/api/add-patients`, {
        name: name,
        age: age,
        gender: gender,
        bloodGroup: bloodGroup,
        phone: phone,
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        GetPatients();
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        resetForm();
      });
  };

  const DeletePatients = (id) => {
    axios
      .delete(`${variables.base_url}/api/delete-patients`, {
        params: {
          _id: id,
        },
      })
      .then((res) => {
        console.log(res.data);
        GetPatients();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const EditPatients = () => {
    axios
      .put(`${variables.base_url}/api/edit-patients`, {
        id: patientId,
        name: name,
        age: age,
        gender: gender,
        bloodGroup: bloodGroup,
        phone: phone,
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        GetPatients();
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        resetForm();
      });
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setBloodGroup("");
    setEmail("");
    setPhone("");
    setGender("");
    setIsEdit(false);
  };

  const handleEdit = (patient) => {
    setPatientId(patient._id);
    setName(patient.name);
    setAge(patient.age);
    setBloodGroup(patient.bloodGroup);
    setEmail(patient.email);
    setPhone(patient.phone);
    setGender(patient.gender);
    setIsEdit(true);
  };

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
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* <div className="mb-3 ms-4">
            <input
              type="date"
              className="form-control searchInputBorder"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Filter by date"
            />
          </div> */}
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
              {patientData?.patients
                ?.filter((item) =>
                  search == ""
                    ? item
                    : item?.name?.toLowerCase().includes(search)
                )
                ?.map((patient) => (
                  <tr>
                    <td>
                      <img
                        style={{ width: 30, height: 30, borderRadius: 50 }}
                        src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Diet Plan"
                      />
                      <span className="ms-2"> {patient?.name} </span>
                    </td>
                    <td>{patient?.age}</td>
                    <td>{patient?.gender}</td>
                    <td>{patient?.bloodGroup}</td>
                    <td>{patient?.phone}</td>
                    <td>{patient?.email}</td>
                    <td className="d-flex align-items-center">
                      <button
                        className="btn btn-primary  mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <TbMessageCircleFilled size={20} />
                      </button>

                      <button
                        className="btn btn-outline-success mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#patientsModal"
                        onClick={() => handleEdit(patient)}
                      >
                        <FaEdit size={20} />
                      </button>

                      <button
                        className="btn btn-outline-danger mx-1"
                        onClick={() => DeletePatients(patient?._id)}
                      >
                        <IoMdClose size={20} />
                      </button>

                      <button className="btn btn-outline-primary mx-1">
                        <BsInfoLg size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <MessageModal />

      {/* Modals here */}
      <div
        class="modal fade"
        id="patientsModal"
        tabindex="-1"
        aria-labelledby="patientModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="patientModalLabel">
                {isEdit ? "Edit patient" : "Add new patient"}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetForm}
              ></button>
            </div>
            <div class="modal-body">
              <form>
                {/* Input Fied */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
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
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <input
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    type="text"
                    className="form-control"
                    id="gender"
                    placeholder="Gender"
                  />
                </div>
                {/* Input Fied */}
                <div className="mb-3">
                  <label htmlFor="bloodGroup" className="form-label">
                    Blood Group
                  </label>
                  <input
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    type="text"
                    className="form-control"
                    id="bloodGroup"
                    placeholder="Blood Group"
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
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={resetForm}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={isEdit ? EditPatients : AddPatients}
              >
                {isEdit ? "Edit Patient" : "Add Patient"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
