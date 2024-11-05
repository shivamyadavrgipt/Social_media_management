import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css"; // Add your CSS file
import BasicNavbar from "../components/BasicNavbar";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      if (response.data.message === "Login successful") {
        // Navigate to the home/dashboard page upon successful login
        navigate("/dashboard");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
      <div className=" flex justify-center items-center mt-24 bg-gray/20">
      <div className="bg-white/20 p-6 rounded-lg shadow-custom w-96">
        <img
          src="https://cdn-icons-gif.flaticon.com/7211/7211809.gif"
          alt="logo"
          className="w-24 mx-auto mb-4 rounded-full "
        />
        <>
            <h2 className="text-gray/20 text-2xl font-bold text-center mb-4">Login to Your Account</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="p-2 mb-3 border bg-gray-200  rounded-full text-gray-500 outline-none"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 mb-4 border bg-gray-200 rounded-full text-gray-500 outline-none"
                required
              />
              <button type="submit" className="bg-orange-500 text-white py-2 rounded">
                Login
              </button>
            </form>
            <p className="text-center mt-4 text-green-500">
              Don't have an account?{" "}
              <span onClick= {() => navigate("/signup")} className="text-blue-500 cursor-pointer">
                Sign Up
              </span>
            </p>
          </>
      </div>
    </div>
  );
};

export default Login;


          