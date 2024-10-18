import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? "active" : ""}`}>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/contributors">Contributors</Link>
        <Link to="/settings">Settings</Link>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
