import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const currentTheme = localStorage.getItem("theme") || "light";

  return (
    <nav className={`navbar ${currentTheme}`}>
      <Link to="/dashboard" className={`navbar-link ${currentTheme}`}>Dashboard</Link>
      <Link to="/posts" className={`navbar-link ${currentTheme}`}>Posts</Link>
      <Link to="/analytics" className={`navbar-link ${currentTheme}`}>Analytics</Link>
      <Link to="/contributors" className={`navbar-link ${currentTheme}`}>Contributors</Link>
      <Link to="/settings" className={`navbar-link ${currentTheme}`}>Settings</Link>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
