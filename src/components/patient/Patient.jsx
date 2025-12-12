import React, { useState } from "react";
import { Table, Button, Form, InputGroup, Modal } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";

const Patient = () => {
  // Modal state
  const [showModal, setShowModal] = useState(false);

  // New patient form state
  const [newPatient, setNewPatient] = useState({
    name: "",
    age: "",
    gender: "Male",
    blood: "",
    phone: "",
    email: "",
    img: "/default.jpg",
  });

  // Add manually new patients one by one
  const [patientsAdded, setPatientsAdded] = useState([]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setPatientsAdded([...patientsAdded, newPatient]);
    setNewPatient({ name: "", age: "", gender: "Male", blood: "", phone: "", email: "", img: "/default.jpg" });
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
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold mb-0" style={{ borderBottom: "3px solid #007bff" }}>
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
          onClick={handleOpenModal}
        >
          + New Patient
        </Button>
      </div>

      {/* Search + Date */}
      <div className="d-flex gap-3 mb-3">
        <InputGroup style={{ maxWidth: "220px" }}>
          <InputGroup.Text style={{ background: "#eef2f7", height: "34px" }}>🔍</InputGroup.Text>
          <Form.Control placeholder="Search" style={{ height: "34px", background: "#f8f9fc", border: "1px solid #dce3ea", fontSize: "13px" }} />
        </InputGroup>
        <Form.Control type="date" style={{ maxWidth: "160px", height: "34px", background: "#f8f9fc", border: "1px solid #dce3ea", fontSize: "13px" }} />
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
            {/* Existing patients manually */}
            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td><div className="d-flex align-items-center gap-2"><img src="/ashna.jpg" alt="profile" style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "cover" }} />Ashna Anjum</div></td>
              <td>22</td>
              <td>Female</td>
              <td>B+</td>
              <td>+91 12345 67890</td>
              <td>ashna@gmail.com</td>
              <td className="d-flex gap-1"><Button size="sm" style={{ background: "#0dcaf0", border: "none", padding: "4px 8px" }}><FaInfoCircle size={14} /></Button><Button size="sm" style={{ background: "#dc3545", border: "none", padding: "4px 8px" }}><MdDelete size={14} /></Button><Button size="sm" style={{ background: "#198754", border: "none", padding: "4px 8px" }}><FiMessageCircle size={15} /></Button></td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td><div className="d-flex align-items-center gap-2"><img src="/darshan.jpg" alt="profile" style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "cover" }} />Darshan Talewar</div></td>
              <td>23</td>
              <td>Male</td>
              <td>O+</td>
              <td>+91 12345 67890</td>
              <td>darshan@gmail.com</td>
              <td className="d-flex gap-1"><Button size="sm" style={{ background: "#0dcaf0", border: "none", padding: "4px 8px" }}><FaInfoCircle size={14} /></Button><Button size="sm" style={{ background: "#dc3545", border: "none", padding: "4px 8px" }}><MdDelete size={14} /></Button><Button size="sm" style={{ background: "#198754", border: "none", padding: "4px 8px" }}><FiMessageCircle size={15} /></Button></td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td><div className="d-flex align-items-center gap-2"><img src="/aman.jpg" alt="profile" style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "cover" }} />Aman Hiranwar</div></td>
              <td>21</td>
              <td>Male</td>
              <td>O+</td>
              <td>+91 12345 67890</td>
              <td>aman@gmail.com</td>
              <td className="d-flex gap-1"><Button size="sm" style={{ background: "#0dcaf0", border: "none", padding: "4px 8px" }}><FaInfoCircle size={14} /></Button><Button size="sm" style={{ background: "#dc3545", border: "none", padding: "4px 8px" }}><MdDelete size={14} /></Button><Button size="sm" style={{ background: "#198754", border: "none", padding: "4px 8px" }}><FiMessageCircle size={15} /></Button></td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td><div className="d-flex align-items-center gap-2"><img src="/huma.jpg" alt="profile" style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "cover" }} />Huma Khan</div></td>
              <td>22</td>
              <td>Female</td>
              <td>O+</td>
              <td>+91 12345 67890</td>
              <td>huma@gmail.com</td>
              <td className="d-flex gap-1"><Button size="sm" style={{ background: "#0dcaf0", border: "none", padding: "4px 8px" }}><FaInfoCircle size={14} /></Button><Button size="sm" style={{ background: "#dc3545", border: "none", padding: "4px 8px" }}><MdDelete size={14} /></Button><Button size="sm" style={{ background: "#198754", border: "none", padding: "4px 8px" }}><FiMessageCircle size={15} /></Button></td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "48px" }}>
              <td><div className="d-flex align-items-center gap-2"><img src="/vaishu.jpg" alt="profile" style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "cover" }} />Vaishu Talewar</div></td>
              <td>21</td>
              <td>Female</td>
              <td>O+</td>
              <td>+91 12345 67890</td>
              <td>vaishu@gmail.com</td>
              <td className="d-flex gap-1"><Button size="sm" style={{ background: "#0dcaf0", border: "none", padding: "4px 8px" }}><FaInfoCircle size={14} /></Button><Button size="sm" style={{ background: "#dc3545", border: "none", padding: "4px 8px" }}><MdDelete size={14} /></Button><Button size="sm" style={{ background: "#198754", border: "none", padding: "4px 8px" }}><FiMessageCircle size={15} /></Button></td>
            </tr>

            {/* Dynamically added patients (manual) */}
            {patientsAdded.map((p, i) => (
              <tr key={i} style={{ verticalAlign: "middle", height: "48px" }}>
                <td><div className="d-flex align-items-center gap-2"><img src={p.img} alt="profile" style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "cover" }} />{p.name}</div></td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>{p.blood}</td>
                <td>{p.phone}</td>
                <td>{p.email}</td>
                <td className="d-flex gap-1"><Button size="sm" style={{ background: "#0dcaf0", border: "none", padding: "4px 8px" }}><FaInfoCircle size={14} /></Button><Button size="sm" style={{ background: "#dc3545", border: "none", padding: "4px 8px" }}><MdDelete size={14} /></Button><Button size="sm" style={{ background: "#198754", border: "none", padding: "4px 8px" }}><FiMessageCircle size={15} /></Button></td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end align-items-center gap-2 mt-4">
        <Button size="sm" variant="light" style={{ padding: "6px 20px", fontSize: "13px" }}>Previous</Button>
        <Button size="sm" variant="light" style={{ background: "#0d6efd", color: "white", padding: "4px 12px", fontSize: "13px" }}>1</Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>2</Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>3</Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>Next</Button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control name="name" value={newPatient.name} onChange={handleChange} type="text" placeholder="Enter patient name" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Age</Form.Label>
              <Form.Control name="age" value={newPatient.age} onChange={handleChange} type="number" placeholder="Enter age" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" value={newPatient.gender} onChange={handleChange}>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control name="blood" value={newPatient.blood} onChange={handleChange} type="text" placeholder="Enter blood group" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone" value={newPatient.phone} onChange={handleChange} type="text" placeholder="Enter phone" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={newPatient.email} onChange={handleChange} type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="success" className="mt-2" style={{width:"100%", backgroundColor:"#0d6efd"}} onClick={handleSave}>Save</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Patient;
