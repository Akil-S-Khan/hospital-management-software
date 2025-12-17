import React, { useState } from "react";
import { Table, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { FaInfoCircle, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";

const Patient = () => {
  const [showModal, setShowModal] = useState(false);

  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "Male",
    blood: "",
    phone: "",
    email: "",
    img: "/default.jpg",
  });

  const [patientsAdded, setPatientsAdded] = useState([]);

  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
    {/*new patient purana data store krega taaki new add hone pr vo remove na ho jaye */}
  };

  const handleSave = () => {
    setPatientsAdded([...patientsAdded, newPatient]);
    setNewPatient({
      name: "",
      age: "",
      gender: "Male",
      blood: "",
      phone: "",
      email: "",
      img: "/default.jpg",
    });
    setShowModal(false);
  };

  return (
    <div
      className="p-3 shadow-lg"
      style={{
        background: "white",
        marginTop: "18px",
        width: "95%",
        margin: "auto",
        height: "80vh",
        borderRadius: "12px",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5
          className="fw-bold mb-0"
          style={{ borderBottom: "3px solid #007bff" }}
        >
          Patient Information
        </h5>
        <Button
          style={{
            background: "#0d6efd",
            borderRadius: "6px",
            fontSize: "13px",
            width: "110px",
            padding: "6px 0px",
          }}
          onClick={() => setShowModal(true)}
        >
          + New Patient
        </Button>
      </div>
      {/* Search */}
      <div className="d-flex gap-3 mb-3">
        <InputGroup style={{ maxWidth: "220px" }}>
          <InputGroup.Text style={{ background: "#eef2f7", height: "34px" }}>
            🔍
          </InputGroup.Text>
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
        <Form.Control
          type="date"
          style={{
            maxWidth: "160px",
            height: "34px",
            background: "#f8f9fc",
            border: "1px solid #dce3ea",
            fontSize: "13px",
          }}
        />
      </div>
      {/* Table */}
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
              <th>Patient Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Blood</th>
              <th>Phone</th>
              <th>Email</th>
              <th>User Action</th>
            </tr>
          </thead>

          <tbody>
            {/* STATIC ROW 1 */}
            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="/ashna.jpg"
                    style={{ width: 34, height: 34, borderRadius: "50%" }}
                  />
                  Ashna Anjum
                </div>
              </td>
              <td>22</td>
              <td>Female</td>
              <td>B+</td>
              <td>+91 12345 67890</td>
              <td>ashna@gmail.com</td>
              <td className="d-flex gap-1">
                <Button size="sm" style={{ background: "#0dcaf0" }}>
                  <FaInfoCircle size={14} />
                </Button>
                <Button size="sm" style={{ background: "#ffc107" }}>
                  <FaEdit size={14} />
                </Button>
                <Button size="sm" style={{ background: "#dc3545" }}>
                  <MdDelete size={14} />
                </Button>
                <Button size="sm" style={{ background: "#198754" }}>
                  <FiMessageCircle size={15} />
                </Button>
              </td>
            </tr>

            {/* STATIC ROW 2 */}
            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="/darshan.jpg"
                    style={{ width: 34, height: 34, borderRadius: "50%" }}
                  />
                  Darshan Talewar
                </div>
              </td>
              <td>23</td>
              <td>Male</td>
              <td>O+</td>
              <td>+91 12345 67890</td>
              <td>darshan@gmail.com</td>
              <td className="d-flex gap-1">
                <Button size="sm" style={{ background: "#0dcaf0" }}>
                  <FaInfoCircle size={14} />
                </Button>
                <Button size="sm" style={{ background: "#ffc107" }}>
                  <FaEdit size={14} />
                </Button>
                <Button size="sm" style={{ background: "#dc3545" }}>
                  <MdDelete size={14} />
                </Button>
                <Button size="sm" style={{ background: "#198754" }}>
                  <FiMessageCircle size={15} />
                </Button>
              </td>
            </tr>

            {/* STATIC ROW 3 */}
            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="/aman.jpg"
                    style={{ width: 34, height: 34, borderRadius: "50%" }}
                  />
                  Aman Hiranwar
                </div>
              </td>
              <td>21</td>
              <td>Male</td>
              <td>O+</td>
              <td>+91 12345 67890</td>
              <td>aman@gmail.com</td>
              <td className="d-flex gap-1">
                <Button size="sm" style={{ background: "#0dcaf0" }}>
                  <FaInfoCircle size={14} />
                </Button>
                <Button size="sm" style={{ background: "#ffc107" }}>
                  <FaEdit size={14} />
                </Button>
                <Button size="sm" style={{ background: "#dc3545" }}>
                  <MdDelete size={14} />
                </Button>
                <Button size="sm" style={{ background: "#198754" }}>
                  <FiMessageCircle size={15} />
                </Button>
              </td>
            </tr>

            {/* STATIC ROW 4 */}
            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="/huma.jpg"
                    style={{ width: 34, height: 34, borderRadius: "50%" }}
                  />
                  Huma Khan
                </div>
              </td>
              <td>22</td>
              <td>Female</td>
              <td>O+</td>
              <td>+91 12345 67890</td>
              <td>huma@gmail.com</td>
              <td className="d-flex gap-1">
                <Button size="sm" style={{ background: "#0dcaf0" }}>
                  <FaInfoCircle size={14} />
                </Button>
                <Button size="sm" style={{ background: "#ffc107" }}>
                  <FaEdit size={14} />
                </Button>
                <Button size="sm" style={{ background: "#dc3545" }}>
                  <MdDelete size={14} />
                </Button>
                <Button size="sm" style={{ background: "#198754" }}>
                  <FiMessageCircle size={15} />
                </Button>
              </td>
            </tr>

            {/* STATIC ROW 5 */}
            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="/vaishu.jpg"
                    style={{ width: 34, height: 34, borderRadius: "50%" }}
                  />
                  Vaishu Talewar
                </div>
              </td>
              <td>21</td>
              <td>Female</td>
              <td>O+</td>
              <td>+91 12345 67890</td>
              <td>vaishu@gmail.com</td>
              <td className="d-flex gap-1">
                <Button size="sm" style={{ background: "#0dcaf0" }}>
                  <FaInfoCircle size={14} />
                </Button>
                <Button size="sm" style={{ background: "#ffc107" }}>
                  <FaEdit size={14} />
                </Button>
                <Button size="sm" style={{ background: "#dc3545" }}>
                  <MdDelete size={14} />
                </Button>
                <Button size="sm" style={{ background: "#198754" }}>
                  <FiMessageCircle size={15} />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/* Pagination */}{" "}
      <div className="d-flex justify-content-end align-items-center gap-2 mt-4">
        {" "}
        <Button
          size="sm"
          variant="light"
          style={{ padding: "6px 20px", fontSize: "13px" }}
        >
          Previous
        </Button>{" "}
        <Button
          size="sm"
          variant="light"
          style={{
            background: "#0d6efd",
            color: "white",
            padding: "4px 12px",
            fontSize: "13px",
          }}
        >
          1
        </Button>{" "}
        <Button
          size="sm"
          variant="light"
          style={{ padding: "4px 12px", fontSize: "13px" }}
        >
          2
        </Button>{" "}
        <Button
          size="sm"
          variant="light"
          style={{ padding: "4px 12px", fontSize: "13px" }}
        >
          3
        </Button>{" "}
        <Button
          size="sm"
          variant="light"
          style={{ padding: "4px 12px", fontSize: "13px" }}
        >
          Next
        </Button>{" "}
      </div>

      {/*Form will get open when the user click on new patient */}
      {/*Modal :- react component , used to create popup */}
      {/*Onhide closed to close modal */}
      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}> {/*jb user close btn click krega toh bnd ho jayega isliye false rkha h */}
        {/*showModal state variable h joh true rhega toh open hoga and false rhega toh bnd rhega */}
        <Modal.Header closeButton>
          <Modal.Title>Add New Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
           <Form.Label>Patient Name :</Form.Label>
            <Form.Control  
              className="mb-2"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              {/*handlechange :- har input ke change pr call hoga */}
            />
            <Form.Label>Patient Age :</Form.Label>
            <Form.Control
              className="mb-2"
              name="age"
              placeholder="Age"
              onChange={handleChange}
            />
            <Form.Label>Blood group :</Form.Label>
            <Form.Control
              className="mb-2"
              name="blood"
              placeholder="Blood Group"
              onChange={handleChange}
            />
            <Form.Label>Phone Number :</Form.Label>
            <Form.Control
              className="mb-2"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
            />
            <Form.Label>Email :</Form.Label>
            <Form.Control
              className="mb-2"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <Button className="w-100" onClick={handleSave}>
              Save patient
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Patient;

{/**Modal open

User form fill karta hai

handleChange state update karta hai

Save click

Patient list mein add

Form reset

Modal close */}
