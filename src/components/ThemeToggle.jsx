import React, { useState, useEffect } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="wheel" onClick={toggleTheme}>
      <div className="wheel-inner">
        {theme === "light" ? "🌚" : "🌞"}
      </div>
    </div>
  );
};

export default ThemeToggle;
