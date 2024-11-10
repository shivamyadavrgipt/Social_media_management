// Signup.jsx
import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users/signup", {
        username,
        email,
        password
      });

      if (response.data.success) {
        setError("");
        navigate("/login");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.log(err);
      setError("Signup failed. Please try again.");
    }
  };

  // Google Sign-In Handler
  const handleGoogleSignIn = async (credentialResponse) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/google-signin", {
        token: credentialResponse.credential,
      });

      if (response.data.success) {
        setError("");
        navigate("/"); // Navigate to home or dashboard
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.log(err);
      setError("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-24 bg-gray/20">
      <div className="bg-white/20 p-6 rounded-lg shadow-custom w-96">
        <img
          src="https://cdn-icons-gif.flaticon.com/7211/7211809.gif"
          alt="logo"
          className="w-24 mx-auto mb-4 rounded-full"
        />
        <>
          <h2 className="text-2xl font-bold text-center mb-4">Create Your Account</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 mb-3 border text-gray-500 outline-none bg-gray-200 rounded-full"
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="p-2 mb-3 border bg-gray-200 rounded-full text-gray-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 mb-3 border bg-gray-200 rounded-full text-gray-500 outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 mb-3 border bg-gray-200 rounded-full text-gray-500 outline-none"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-2 mb-4 border bg-gray-200 rounded-full text-gray-500 outline-none"
              required
            />
            <button type="submit" className="bg-orange-500 text-white py-2 rounded">
              Sign Up
            </button>
          </form>

          {/* Add Google Sign-In Button here */}
          <div className="flex justify-center mt-4">
            <GoogleLogin
              onSuccess={handleGoogleSignIn} // Google Sign-In success handler
              onError={() => setError("Google Sign-In failed.")} // Error handler
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            />
          </div>

          <p className="text-center mt-4 text-green-500">
            Already have an account?{" "}
            <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </>
      </div>
    </div>
  );
};

export default Signup;
