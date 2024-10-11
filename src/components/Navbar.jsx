// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a><Link to="/">Dashboard</Link></a>
      <a><Link to="/posts">Posts</Link></a>
      <a><Link to="/analytics">Analytics</Link></a>
      <a><Link to="/settings">Settings</Link></a>
    </nav>
  );
};

export default Navbar;
