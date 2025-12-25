import { BsCheckLg, BsInfoLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import variables from "../../utils/variables";
import MessageModal from "../patients/MessageModal";

const Appointment = () => {
  const [appointmentData, setAppointmentData] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [fee, setFee] = useState("");
  const [description, setDescription] = useState();
  const [search, setSearch] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [appointmentId, setAppointmentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    GetAppointments();
  }, []);

  const GetAppointments = () => {
    axios
      .get(`${variables.base_url}/api/appointments`)
      .then((res) => {
        console.log(res.data);
        setAppointmentData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddAppointment = () => {
    axios
      .post(`${variables.base_url}/api/add-appointments`, {
        name: name,
        age: age,
        time: time,
        date: date,
        fee: fee,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
        GetAppointments();
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  const EditAppointment = () => {
    axios
      .put(`${variables.base_url}/api/edit-appointments`, {
        id: appointmentId,
        name: name,
        age: age,
        time: time,
        date: date,
        fee: fee,
        description: description,
      })
      .then((res) => {
        console.log(res.data);
        GetAppointments();
        resetForm();
      })
      .catch((err) => console.log(err));
    resetForm();
  };

  const DeleteAppointment = (id) => {
    console.log(id);
    axios
      .delete(`${variables.base_url}/api/delete-appointments`, {
        params: { _id: id },
      })
      .then((res) => {
        console.log(res.data);
        GetAppointments();
      })
      .catch((err) => console.log(err));
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setTime("");
    setDate("");
    setFee("");
    setDescription("");
    setIsEdit(false);
  };

  const handleEdit = (appointment) => {
    setAppointmentId(appointment._id);
    setName(appointment.name);
    setAge(appointment.age);
    setTime(appointment.time);
    setDate(appointment.date);
    setFee(appointment.fee);
    setDescription(appointment.description);
    setIsEdit(true);
  };

  return (
    <>
      <div className="w-100 h-100 shadow-lg rounded pt-4 px-4 ms-2 bg-white ">
        <div className="d-flex justify-content-between align-items-center">
          <h5>New Appointments</h5>

          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#appointmentModal"
            type="button"
          >
            <FaPlus /> New Appointment
          </button>
        </div>
        <hr />

        <div className="d-flex align-items-center gap-3 mt-2 mb-4">
          {/* Search field */}
          <input
            type="text"
            className="form-control"
            placeholder="Search by Name"
            style={{ maxWidth: "200px", borderRadius: 25 }}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Date field */}
          <input
            type="date"
            className="form-control"
            style={{ maxWidth: "200px", borderRadius: 25 }}
            onChange={(e) => {
              setSearchDate(e.target.value);
              console.log(typeof searchDate);
            }}
          />
        </div>

        <div
          style={{ overflowX: "hidden", overflowY: "scroll", height: "370px" }}
        >
          <table className="table table-hover mt-0">
            <thead className="table-header">
              <tr style={{ position: "sticky" }}>
                <th>Time</th>
                <th>Date</th>
                <th>Patient Name</th>
                <th>Patient Age</th>
                <th>Fee Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {appointmentData?.appointment
                ?.filter((item) =>
                  search == ""
                    ? item
                    : item?.name?.toLowerCase().includes(search.toLowerCase())
                )
                ?.filter((item) =>
                  searchDate == ""
                    ? item
                    : item?.date?.toLowerCase().includes(searchDate)
                )
                ?.map((app) => (
                  <tr key={app?._id}>
                    <td>{app?.time}</td>
                    <td>{app?.date}</td>
                    <td>{app?.name}</td>
                    <td>{app?.age}</td>
                    <td>{app?.fee}</td>

                    <td className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-success mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#appointmentModal"
                        onClick={() => handleEdit(app)}
                      >
                        <FaEdit size={20} />
                      </button>

                      <button
                        className="btn btn-outline-danger mx-1"
                        onClick={() => DeleteAppointment(app?._id)}
                      >
                        <IoMdClose size={20} />
                      </button>

                      <button
                        className="btn btn-outline-primary mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#InfoModel"
                        onClick={() => setSelectedAppointment(app)}
                      >
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

      {/* Modal */}
      <div
        class="modal fade"
        id="appointmentModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">
                {isEdit ? "Edit Appointment" : "Add Appointment"}
              </h1>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                onClick={resetForm}
              ></button>
            </div>

            <div class="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-control"
                    type="number"
                    placeholder="Age"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Time</label>
                  <input
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control"
                    type="date"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Enter Description"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Fee</label>
                  <input
                    value={fee}
                    onChange={(e) => setFee(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Paid / Unpaid"
                  />
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={resetForm}
              >
                Close
              </button>

              <button
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={isEdit ? EditAppointment : AddAppointment}
              >
                {isEdit ? "Save Changes" : "Add Appointment"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* information Modal */}

      <div
        className="modal fade"
        id="InfoModel"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Appointment Info</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              {selectedAppointment && (
                <div>
                  <p>
                    <strong>Name:</strong> {selectedAppointment.name}
                  </p>
                  <p>
                    <strong>Age:</strong> {selectedAppointment.age}
                  </p>
                  <p>
                    <strong>Date:</strong> {selectedAppointment.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {selectedAppointment.time}
                  </p>
                  <p>
                    <strong>Fee:</strong> {selectedAppointment.fee}
                  </p>
                  <p>
                    <strong>Description:</strong>{" "}
                    {selectedAppointment.description}
                  </p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
