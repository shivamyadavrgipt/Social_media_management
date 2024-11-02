// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet"; 
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Navbar from "./components/Navbar";
import Contributors from "./pages/Contributors";
import "./App.css";
import Publish from "./pages/Publish";
import Settings from "./pages/settings";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Newsletter from "./pages/Newsletter";
import Preloader from "./pages/PreLoader";

function App() {
  // Preloader state
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <Router>
          <Helmet>
            <title>Social Media Management System</title>
            <meta
              name="description"
              content="Manage multiple social media accounts in one place. Analyze user interactions and post responses easily."
            />
            <meta name="keywords" content="social media, management, analytics, user interactions" />
            <meta name="author" content="Your Name" />

            <meta property="og:title" content="Social Media Management System" />
            <meta
              property="og:description"
              content="A comprehensive platform to manage and analyze your social media presence."
            />
            <meta property="og:image" content="https://social-media-management-djkz.vercel.app/og-image.jpg" />
            <meta property="og:url" content="https://social-media-management-djkz.vercel.app" />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Social Media Management System" />
            <meta
              name="twitter:description"
              content="Manage your social media accounts from one place and analyze user interactions."
            />
            <meta name="twitter:image" content="https://social-media-management-djkz.vercel.app/og-image.jpg" />

            <meta name="robots" content="index, follow" />

            <link rel="canonical" href="https://social-media-management-djkz.vercel.app" />
          </Helmet>

          <Navbar />
          <div className="body-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/posts" element={<Publish />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/contributors" element={<Contributors />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/newsletter" element={<Newsletter />} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
