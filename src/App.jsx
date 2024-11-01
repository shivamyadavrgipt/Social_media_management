// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
              <Route path="*" element={<h1>404, Page Not Exist!!!</h1>} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
