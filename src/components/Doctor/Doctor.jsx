import React, { useState } from "react";
import { Table, Button, Form, InputGroup, Modal } from "react-bootstrap";

const DoctorPage = () => {
  const [showModal, setShowModal] = useState(false);

  // Form state for adding new doctor
  const [newDoctor, setNewDoctor] = useState({
    name: "",
    qualification: "",
    specialist: "",
    experience: "",
    contact: "",
    image: "",
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
  };

  const handleSaveDoctor = () => {
    console.log("New Doctor:", newDoctor);
    setNewDoctor({ name: "", qualification: "", specialist: "", experience: "", contact: "", image: "" });
    handleCloseModal();
    // Note: Naya doctor table me manually add nahi ho raha, sirf console me log ho raha hai
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
          Doctors Detail
        </h5>

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
          + Add Doctor
        </Button>
      </div>

      {/* Search */}
      <div className="d-flex gap-3 mb-3">
        <InputGroup style={{ maxWidth: "220px" }}>
          <InputGroup.Text style={{ background: "#eef2f7", height: "34px" }}>🔍</InputGroup.Text>
          <Form.Control
            placeholder="Search"
            style={{ height: "34px", background: "#f8f9fc", border: "1px solid #dce3ea", fontSize: "13px" }}
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
              <th>Doctor Name</th>
              <th>Qualification</th>
              <th>Specialist</th>
              <th>Experience</th>
              <th>Contact No</th>
            </tr>
          </thead>

          <tbody>
            {/* All doctor  */}
            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Ashna Anjum
              </td>
              <td>MBBS, MD (Medicine)</td>
              <td style={{ color: "blue", fontWeight: "600" }}>Physician</td>
              <td>10 Years</td>
              <td>1234567890</td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Aman Hiranwar
              </td>
              <td>MBBS, MS (Ortho)</td>
              <td style={{ color: "blue", fontWeight: "600" }}>Orthopedic</td>
              <td>7 Years</td>
              <td>1234567890</td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Vaishu Talewar
              </td>
              <td>BDS, MDS</td>
              <td style={{ color: "blue", fontWeight: "600" }}>Dentist</td>
              <td>5 Years</td>
              <td>1234567890</td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/men/52.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Darshan Talewar
              </td>
              <td>MBBS, MD (Pediatrics)</td>
              <td style={{ color: "blue", fontWeight: "600" }}>Child Specialist</td>
              <td>8 Years</td>
              <td>1234567890</td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/women/22.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Ayushi Talewar
              </td>
              <td>MBBS, MD (Dermatology)</td>
              <td style={{ color: "blue", fontWeight: "600" }}>Skin Specialist</td>
              <td>6 Years</td>
              <td>1234567890</td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Akki Ansari
              </td>
              <td>MBBS, DM (Cardiology)</td>
              <td style={{ color: "blue", fontWeight: "600" }}>Cardiologist</td>
              <td>12 Years</td>
              <td>1234567890</td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/women/47.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Huma Khan
              </td>
              <td>MBBS, DGO</td>
              <td style={{ color: "blue", fontWeight: "600" }}>Gynecologist</td>
              <td>9 Years</td>
              <td>1234567890</td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Vyankat Talewar
              </td>
              <td>MBBS, MD (Psychiatry)</td>
              <td style={{ color: "blue", fontWeight: "600" }}>Psychiatrist</td>
              <td>11 Years</td>
              <td>1234567890</td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Laxmi Talewar
              </td>
              <td>MBBS, MS (ENT)</td>
              <td style={{ color: "blue", fontWeight: "600" }}>ENT Specialist</td>
              <td>7 Years</td>
              <td>1234567890</td>
            </tr>

            <tr style={{ verticalAlign: "middle", height: "50px" }}>
              <td className="d-flex align-items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/men/33.jpg"
                  alt="doctor"
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
                />
                Dr. Naman Hiranwar
              </td>
              <td>MBBS, MD (Radiology)</td>
              <td style={{ color: "blue", fontWeight: "600" }}>Radiologist</td>
              <td>6 Years</td>
              <td>1234567890</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end align-items-center gap-2 mt-4">
        <Button size="sm" variant="light" style={{ padding: "6px 20px", fontSize: "13px" }}>Previous</Button>
        <Button size="sm" variant="light" style={{ background: "#0d6efd", color: "white", padding: "4px 12px", fontSize: "13px" }}>1</Button>
        <Button size="sm" variant="light">2</Button>
        <Button size="sm" variant="light">3</Button>
        <Button size="sm" variant="light">Next</Button>
      </div>

      {/* Add Doctor Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Doctor Name</Form.Label>
              <Form.Control name="name" value={newDoctor.name} onChange={handleChange} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Qualification</Form.Label>
              <Form.Control name="qualification" value={newDoctor.qualification} onChange={handleChange} type="text" placeholder="Enter qualification" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Specialist</Form.Label>
              <Form.Control name="specialist" value={newDoctor.specialist} onChange={handleChange} type="text" placeholder="Enter specialist" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Experience</Form.Label>
              <Form.Control name="experience" value={newDoctor.experience} onChange={handleChange} type="text" placeholder="Enter experience" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Contact No</Form.Label>
              <Form.Control name="contact" value={newDoctor.contact} onChange={handleChange} type="text" placeholder="Enter contact" />
            </Form.Group>
            <Button style={{ background: "#0d6efd", border: "none", marginTop: "10px" }} onClick={handleSaveDoctor}>
              Save Doctor
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DoctorPage;
