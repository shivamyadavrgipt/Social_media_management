import React from "react";
import { Link } from "react-router-dom";
import "../pages/LandingPage.css";

const BasicNavbar = () => {
  return (
    <div className="landing-container">
      {/* <nav className="navbar" id="navbarr"> */}
        {/* <div className="logo">
          <img src="\is14Logo.png" alt="Logo" />
        </div> */}
        {/* <div className="nav-links">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div> */}
        <div className="nav-links">
          <div>
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
      {/* </nav> */}
    </div>
  );
};

export default BasicNavbar;
