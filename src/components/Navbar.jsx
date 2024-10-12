// Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar">

      <Link 
        to="/" 
        className={activeLink === '/' ? 'active' : ''} 
        onClick={() => handleLinkClick('/')}
      >
        Dashboard
      </Link>
      <Link 
        to="/posts" 
        className={activeLink === '/posts' ? 'active' : ''} 
        onClick={() => handleLinkClick('/posts')}
      >
        Posts
      </Link>
      <Link 
        to="/analytics" 
        className={activeLink === '/analytics' ? 'active' : ''} 
        onClick={() => handleLinkClick('/analytics')}
      >
        Analytics
      </Link>
      <Link 
        to="/settings" 
        className={activeLink === '/settings' ? 'active' : ''} 
        onClick={() => handleLinkClick('/settings')}
      >
        Settings
      </Link>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/settings">Settings</Link>

    </nav>
  );
};

export default Navbar;
