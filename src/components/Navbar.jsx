// // Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to="/posts">Posts</Link>
//       <Link to="/analytics">Analytics</Link>
//       <Link to="/contributors">Contributors</Link>
//       <Link to="/settings">Settings</Link>
//        <Link to="/newsletter">Newsletter</Link>
//     </nav>
//   );
// };

// export default Navbar;
// Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => (isActive ? "active" : "")} 
      >
        Dashboard
      </NavLink>
      <NavLink 
        to="/posts" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Posts
      </NavLink>
      <NavLink 
        to="/analytics" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Analytics
      </NavLink>
      <NavLink 
        to="/contributors" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contributors
      </NavLink>
      <NavLink 
        to="/settings" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Settings
      </NavLink>
      <NavLink 
        to="/newsletter" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Newsletter
      </NavLink>
    </nav>
  );
};

export default Navbar;
