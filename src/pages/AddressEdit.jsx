import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // To navigate back on button click

const AddressEdit = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    houseNo: "",
    street: "",
    City: "",
    State: "",
    pincode: "",
  });

  const navigate = useNavigate(); // For programmatically navigating

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle save form
  const handleSave = (e) => {
    e.preventDefault();
    // Logic to save form data (you could send it to an API here)
    console.log("Form data saved", formData);
  };

  // Handle back button
  const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={4}>
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="text-center mb-4">Edit Address</h3>

              <Form onSubmit={handleSave}>
                {/* Full Name */}
                <Form.Group controlId="fullName" className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                {/* Phone */}
                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label>Phone No.</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </Form.Group>

                {/* Address Section */}
                <h5 className="mb-3">Address</h5>

                <Row>
                  <Col xs={12} sm={6} className="mb-3">
                    <Form.Group controlId="houseNo">
                      <Form.Label>House No.</Form.Label>
                      <Form.Control
                        type="text"
                        name="houseNo"
                        value={formData.houseNo}
                        onChange={handleChange}
                        placeholder="House No."
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} className="mb-3">
                    <Form.Group controlId="street">
                      <Form.Label>Street</Form.Label>
                      <Form.Control
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        placeholder="Street Name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={6} className="mb-3">
                    <Form.Group controlId="street">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="city Name"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} className="mb-3">
                    <Form.Group controlId="sector">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Sector"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} className="mb-3">
                    <Form.Group controlId="pincode">
                      <Form.Label>Pincode</Form.Label>
                      <Form.Control
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="Pincode"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Action Buttons */}
                <div className="d-flex justify-content-between mt-4">
                    <Link to={'/myprofile'}>
                  <Button variant="secondary" onClick={handleBack}>
                    Back
                  </Button>
                  </Link>

                  <Button type="submit" variant="primary">
                    Save
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddressEdit;
