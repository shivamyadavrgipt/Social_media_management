// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import './App.css'
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="body-content"> 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;


<div align="center">
  <p>
    <a href="https://github.com/shivamyadavrgipt/Social_media_management">
      <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" alt="Open Source Love svg1" />
    </a>
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs Welcome" />
    <img src="https://api.visitorbadge.io/api/visitors?path=sk66641%2FAquaGuardians&countColor=%23263759&style=flat" alt="Visitors" />
    <img src="https://img.shields.io/github/forks/shivamyadavrgipt/Social_media_management" alt="GitHub forks" />
    <img src="https://img.shields.io/github/stars/shivamyadavrgipt/Social_media_management" alt="GitHub Repo stars" />
    <img src="https://img.shields.io/github/contributors/shivamyadavrgipt/Social_media_management" alt="GitHub contributors" />
    <img src="https://img.shields.io/github/last-commit/shivamyadavrgipt/Social_media_management" alt="GitHub last commit" />
    <img src="https://img.shields.io/github/repo-size/shivamyadavrgipt/Social_media_management" alt="GitHub repo size" />
    <img src="https://img.shields.io/github/license/shivamyadavrgipt/Social_media_management" alt="GitHub license" />
    <img src="https://img.shields.io/github/issues/shivamyadavrgipt/Social_media_management" alt="GitHub issues" />
    <img src="https://img.shields.io/github/issues-closed-raw/shivamyadavrgipt/Social_media_management" alt="GitHub closed issues" />
    <img src="https://img.shields.io/github/issues-pr/shivamyadavrgipt/Social_media_management" alt="GitHub pull requests" />
    <img src="https://img.shields.io/github/issues-pr-closed/shivamyadavrgipt/Social_media_management" alt="GitHub closed pull requests" />
  </p>
</div>
