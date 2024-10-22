// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Navbar from "./components/Navbar";
import Contributors from "./pages/Contributors";
import "./App.css";
import Publish from "./pages/Publish";
import Signup from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Settings from "./pages/settings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="body-content">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<Publish />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/signup" element={< Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

