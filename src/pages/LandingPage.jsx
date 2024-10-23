import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import BasicNavbar from "../components/BasicNavbar";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <BasicNavbar />

      <div className="hero-section" id="mainPage">
        <div>
          <h1>Simplify Your Social Media Management</h1>
          <p>
            Welcome to <strong>Social Manager</strong>! Effortlessly manage all
            your social media accounts from one powerful, streamlined platform.
            Analyze interactions, schedule posts, and optimize your online
            presence with ease.
          </p>
          <Link to="/dashboard">
            <button className="btn-get-started">Get Started Now</button>
          </Link>
        </div>
        <div>
          <img src="\illustration.png" alt="pic" id="pic" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
