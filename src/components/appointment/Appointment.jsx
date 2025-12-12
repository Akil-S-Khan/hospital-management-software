import React, { useState } from "react";
import { Table, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { MdClose } from "react-icons/md"; // Close icon

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("new");

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // New appointment form state
  const [newAppointment, setNewAppointment] = useState({
    time: "",
    date: "",
    patient: "",
    age: "",
    doctor: "",
    feeStatus: "Unpaid",
  });

  // State to store new appointments
  const [appointments, setAppointments] = useState({
    new: [
      { time: "9:30 AM", date: "05/12/2025", patient: "Ashna Anjum", age: 22, doctor: "Dr Vaishu" },
      { time: "10:00 AM", date: "05/12/2025", patient: "Riya Sharma", age: 26, doctor: "Dr Vaishu" },
      { time: "11:15 AM", date: "05/12/2025", patient: "Karan Patel", age: 29, doctor: "Dr Vaishu" },
      { time: "12:30 AM", date: "05/12/2025", patient: "Aman Hiranwar", age: 29, doctor: "Dr Vaishu" },
      { time: "2:00 AM", date: "05/12/2025", patient: "Vyankat Talewar", age: 29, doctor: "Dr Vaishu" },
      { time: "2:45 AM", date: "05/12/2025", patient: "Vaishu Talewar", age: 29, doctor: "Dr Vaishu" },
      { time: "3:30 AM", date: "05/12/2025", patient: "Laxmi Talewar", age: 29, doctor: "Dr Vaishu" },
      { time: "4:10 AM", date: "05/12/2025", patient: "Darshan Talewar", age: 29, doctor: "Dr Vaishu" },
    ],
    complete: [
      { time: "12:00 PM", date: "06/12/2025", patient: "Ashna Anjum", age: 32, doctor: "Dr Vaishu", feeStatus: "Unpaid" },
      { time: "1:30 PM", date: "06/12/2025", patient: "Riya Sharma", age: 24, doctor: "Dr Vaishu", feeStatus: "Paid" },
      { time: "2:45 PM", date: "06/12/2025", patient: "Karan Patel", age: 28, doctor: "Dr Vaishu", feeStatus: "Unpaid" },
      { time: "3:00 PM", date: "06/12/2025", patient: "Aman Hiranwar", age: 28, doctor: "Dr Vaishu", feeStatus: "Paid" },
      { time: "3:45 PM", date: "06/12/2025", patient: "Vyankat Talewar", age: 28, doctor: "Dr Vaishu", feeStatus: "Unpaid" },
      { time: "4:30 PM", date: "06/12/2025", patient: "Vaishu Talewar", age: 28, doctor: "Dr Vaishu", feeStatus: "Paid" },
      { time: "4:30 PM", date: "06/12/2025", patient: "Laxmi Talewar", age: 28, doctor: "Dr Vaishu", feeStatus: "Paid" },
      { time: "4:30 PM", date: "06/12/2025", patient: "Darshan Talewar", age: 28, doctor: "Dr Vaishu", feeStatus: "Paid" },
    ],
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Add new appointment to the "new" tab
    setAppointments({
      ...appointments,
      new: [...appointments.new, newAppointment],
    });

    setNewAppointment({ time: "", date: "", patient: "", age: "", doctor: "", feeStatus: "Unpaid" });
    handleCloseModal();
  };

  return (
    <div
      className="p-3 shadow-lg"
      style={{
        background: "white",
        marginTop: "18px",
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        height: "90%",
        borderRadius: "12px",
      }}
    >
      {/* Header with Tabs */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center" style={{ gap: "20px" }}>
          <h5
            className="fw-bold mb-0"
            style={{
              cursor: "pointer",
              borderBottom: activeTab === "new" ? "3px solid #007bff" : "none",
            }}
            onClick={() => setActiveTab("new")}
          >
            New Appointment
          </h5>
          <h5
            className="fw-bold mb-0"
            style={{
              cursor: "pointer",
              borderBottom: activeTab === "complete" ? "3px solid #007bff" : "none",
            }}
            onClick={() => setActiveTab("complete")}
          >
            Complete Appointment
          </h5>
        </div>

        {/* + New Appointment Button */}
        <Button
          style={{
            background: "#0d6efd",
            borderRadius: "6px",
            fontSize: "13px",
            width: "130px",
            padding: "6px 0px",
          }}
          onClick={handleOpenModal}
        >
          + New Appointment
        </Button>
      </div>

      {/* Search */}
      <div className="d-flex gap-3 mb-3">
        <InputGroup style={{ maxWidth: "220px" }}>
          <InputGroup.Text style={{ background: "#eef2f7", height: "34px" }}>🔍</InputGroup.Text>
          <Form.Control
            placeholder="Search"
            style={{
              height: "34px",
              background: "#f8f9fc",
              border: "1px solid #dce3ea",
              fontSize: "13px",
            }}
          />
        </InputGroup>
      </div>

      {/* Scrollable Table */}
      <div
        style={{
          maxHeight: "330px",
          overflowY: "auto",
          border: "1px solid #eef2f7",
          borderRadius: "6px",
        }}
      >
        <Table hover responsive style={{ fontSize: "14px", marginBottom: 0 }}>
          <thead style={{ background: "#f3f6fb", position: "sticky", top: 0 }}>
            <tr>
              <th>Time</th>
              <th>Date</th>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Doctor</th>
              {activeTab === "complete" && <th>Fee Status</th>}
              <th>User Action</th>
            </tr>
          </thead>

          <tbody>
            {/* NEW APPOINTMENTS */}
            {activeTab === "new" &&
              appointments.new.map((item, index) => (
                <tr key={index} style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                  <td>{item.patient}</td>
                  <td>{item.age}</td>
                  <td>{item.doctor}</td>
                  <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "blue", fontWeight: "600" }}>Reschedule</span>
                    <div
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "50%",
                        width: "22px",
                        height: "22px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <MdClose size={16} />
                    </div>
                  </td>
                </tr>
              ))}

            {/* COMPLETE APPOINTMENTS */}
            {activeTab === "complete" &&
              appointments.complete.map((item, index) => (
                <tr key={index} style={{ verticalAlign: "middle", height: "48px" }}>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                  <td>{item.patient}</td>
                  <td>{item.age}</td>
                  <td>{item.doctor}</td>
                  <td style={{ color: item.feeStatus === "Paid" ? "green" : "red", fontWeight: "600" }}>
                    {item.feeStatus}
                  </td>
                  <td style={{ color: "blue", fontWeight: "600" }}>Request fee</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end align-items-center gap-2 mt-4">
        <Button size="sm" variant="light" style={{ padding: "6px 20px", fontSize: "13px" }}>
          Previous
        </Button>
        <Button
          size="sm"
          variant="light"
          style={{ background: "#0d6efd", color: "white", padding: "4px 12px", fontSize: "13px" }}
        >
          1
        </Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>
          2
        </Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>
          3
        </Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>
          Next
        </Button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Time</Form.Label>
              <Form.Control
                name="time"
                value={newAppointment.time}
                onChange={handleChange}
                type="text"
                placeholder="Enter time"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Date</Form.Label>
              <Form.Control name="date" value={newAppointment.date} onChange={handleChange} type="date" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                name="patient"
                value={newAppointment.patient}
                onChange={handleChange}
                type="text"
                placeholder="Enter patient name"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Age</Form.Label>
              <Form.Control
                name="age"
                value={newAppointment.age}
                onChange={handleChange}
                type="number"
                placeholder="Enter age"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Doctor</Form.Label>
              <Form.Control
                name="doctor"
                value={newAppointment.doctor}
                onChange={handleChange}
                type="text"
                placeholder="Enter doctor name"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Fee Status</Form.Label>
              <Form.Select name="feeStatus" value={newAppointment.feeStatus} onChange={handleChange}>
                <option value="Unpaid">Unpaid</option>
                <option value="Paid">Paid</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Appointment;
