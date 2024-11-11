import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  
  const [user, setUser] = useState({
    name: "John ",
    lastname :"Doe",
    email: "john.doe@example.com",
    phone:"886465736",
    gender: "Male",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Toggle editing mode
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    
    <>
      <div className="flex">
        <div className="container my-6">
          {/* Profile Section */}
          <div className="row   ">
            <div className="col-md-12">
              <div className="card shadow-sm">
                <div
                  className="card-body "
                  style={{ backgroundColor: "#DBB05E" }}
                >
                  {/* Edit Button */}
                  <button
                    type="button"
                    className="btn btn-outline-primary position-absolute top-0 end-0 m-9"
                    onClick={handleEditClick}
                    style={{ width: "100px", backgroundColor: "black" }}
                  >
                    {isEditing ? "Save" : "Edit"}
                  </button>

                  {/* Profile Content */}
                  <div className="d-flex align-items-center">
                    {/* Left Side: Profile Image */}
                    <div className="me-4">
                      <img
                        src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                        alt="Profile"
                        className="img-fluid rounded-circle"
                        style={{ width: "200px", height: "200px" }}
                      />
                    </div>

                    <div>
                      {/* Name */}
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                         First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="first-name"
                          name="first-name"
                          value={user.name}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                         Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id=" last-name"
                          name="last-name"
                          value={user.lastname}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>
                      {/* PHONE */}
                      <div className="mb-3">
                        <label htmlFor="Phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="Number"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={user.phone}
                          onChange={handleChange}
                          disabled={!isEditing}
                        />
                      </div>

                      {/* Gender */}
                      <div className="mb-3">
                        <label htmlFor="gender" className="form-label">
                          Gender
                        </label>
                        <select
                          className="form-select"
                          id="gender"
                          name="gender"
                          value={user.gender}
                          onChange={handleChange}
                          disabled={!isEditing}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-5 col-sm-12 m-b30 mt-md-0 mt-4">
          <aside className="side-bar sticky-top right">
            <div className="service_menu_nav widget style-1">
              <ul className="menu">
                <li className="menu-item">
                  <a href="about-us.html">Cart</a>
                </li>
                <li className="menu-item">
                  <a href="privacy-policy.html">Wishlist</a>
                </li>
                <li className="menu-item active">
                  <a href="help-desk.html">Help Desk</a>
                </li>
                <li className="menu-item">
                  <a href="contact-us.html">Logout</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Add Address Button */}
      <Button variant="success" className="mb-3 ml-6">
        Add Address
      </Button>

      {/* Address Card */}
      <div className="flex flex-row gap-6 ml-6">
        <Card
          className=" card-item "
          style={{ width: "500px", border: "2px solid black" }}
        >
          <Card.Body>
            <div className="d-flex justify-content-between">
              {/* Address Information */}
              <div>
                <p>
                  <strong>Name:</strong> John Doe
                </p>
                <p>
                  <strong>Email:</strong> johndoe@example.com
                </p>
                <p>
                  <strong>Phone:</strong> (123) 456-7890
                </p>
                <p>
                  <strong>Address:</strong> 123 Main St, City, Country
                </p>
              </div>

              {/* Edit Button */}
              <Link to={"/addressedit"}>
                <Button variant="warning" className="align-self-start">
                  Edit
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card
          className=""
          style={{ width: "500px", border: "2px solid black" }}
        >
          <Card.Body>
            <div className="d-flex justify-content-between">
              {/* Address Information */}
              <div style={{ padding: "10px" }}>
                <p>
                  <strong>Name:</strong> John Doe
                </p>
                <p>
                  <strong>Email:</strong> johndoe@example.com
                </p>
                <p>
                  <strong>Phone:</strong> (123) 456-7890
                </p>
                <p>
                  <strong>Address:</strong> 123 Main St, City, Country
                </p>
              </div>

              {/* Edit Button */}
              <Button variant="warning" className="align-self-start">
                Edit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
