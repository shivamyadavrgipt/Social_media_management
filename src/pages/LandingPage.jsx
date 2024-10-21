import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar" id="navbarr">
        <div className="logo">
            <img src="\is14Logo.png" alt="Logo" />
        </div>
        <div className="nav-links">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </nav>

      <div className="hero-section" id="mainPage">
        <div>
          <h1>Simplify Your Social Media Management</h1>
          <p>
            Welcome to <strong>Social Manager</strong>! Effortlessly manage all your social media accounts from one powerful, streamlined platform.
            Analyze interactions, schedule posts, and optimize your online presence with ease.
          </p>
          <Link to="/dashboard">
            <button className="btn-get-started">Get Started Now</button>
          </Link>
        </div>
        <div><img src="\illustration.png" alt="pic" id="pic" /></div>
      </div>
    </div>
  );
};

export default LandingPage;
