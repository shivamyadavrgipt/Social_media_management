// LandingPage.jsx
import React from "react";
import './LandingPage.css';  

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
            <img src="\is14Logo.png" alt="" />
        </div>
        <div className="nav-links">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </nav>

      <div className="hero-section">
        <h1>Take Control of Your Social Media</h1>
        <p>Manage all your social media platforms from one place, analyze user interactions, and post with ease.</p>
        <button className="btn-get-started">Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
