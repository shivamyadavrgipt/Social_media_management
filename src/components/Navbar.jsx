// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#">
                   <i class='bx bxs-dashboard'></i>
                   <span class="text">Dashboard</span>
                </a>
      <a href="#">
                     <i class='bx bx-photo-album'></i>
                     <span class="text">Post</span>
                 </a>
                 <a href="#">
                    <i class='bx bxs-analyse' ></i>
                     <span class="text">Analytics</span>
                 </a>
                 <a href="#">
                 <i class='bx bxs-cog' ></i>
                     <span class="text">Settings</span>
                 </a>
    </nav>
  );
};

export default Navbar;