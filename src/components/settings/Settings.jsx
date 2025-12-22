import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const SettingsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        width: "95%",
        margin: "20px auto",
        padding: "20px",
        height: "80vh",
        background: "#fefefe",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "15px" }}>
        <span
          style={{
            borderBottom: "2px solid #0d6efd",
            display: "inline-block",
            paddingBottom: "4px",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Settings
        </span>
      </div>

      {/* Scrollable Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* Profile Card */}
        <Card className="shadow-sm">
          <Card.Body style={{ padding: "12px" }}>
            <h5 style={{ marginBottom: "8px" }}>Profile Settings</h5>
            <Form>
              <Row className="mb-2">
                <Col>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="vaishu@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Button
                variant="primary"
                style={{ width: "140px", padding: "6px 12px", fontSize: "13px", marginTop: "10px" }}
              >
                Update Profile
              </Button>
            </Form>
          </Card.Body>
        </Card>

        {/* Password Card */}
        <Card className="shadow-sm">
          <Card.Body style={{ padding: "12px" }}>
            <h5 style={{ marginBottom: "8px" }}>Change Password</h5>
            <Form>
              <Row className="mb-2">
                <Col>
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="password" placeholder="Current Password" />
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="New Password" />
                </Col>
                <Col>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" />
                </Col>
              </Row>
              <Button
                variant="warning"
                style={{ width: "130px", padding: "6px 12px", fontSize: "13px" }}
              >
                Change Password
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
