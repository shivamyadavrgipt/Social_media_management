// export default Signup;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // For API calls
import "./signup.css";
import BasicNavbar from "../components/BasicNavbar";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form and handle signup submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    // Password confirmation check
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          username,
          email,
          password,
        }
      );

      if (response.data.success) {
        navigate("/login"); // Redirect to login page after successful signup
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <BasicNavbar />
      {/* <nav className="navbar">
        <div className="logo">
          <img src="/is14Logo.png" alt="Logo" />
        </div>
        <div className="nav-links">
          <div>
            {" "}
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
          </div>
          <div>
            <Link to="/signup">
              <button className="btn-signup">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav> */}

      <div className="signup-form-container">
        <h2>Create Your Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-signup-submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
