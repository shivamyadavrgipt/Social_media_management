import React, { useEffect, useState } from "react";
import "./Contributors.css";

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const contributorsPerPage = 12; // 2 rows of 3 contributors each

  const fetchContributors = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/shivamyadavrgipt/Social_media_management/contributors"
      );
      const data = await response.json();
      setContributors(data);
    } catch (error) {
      console.error("Error fetching contributors:", error);
    }
  };

  useEffect(() => {
    fetchContributors();

    // Check for dark mode in local storage
    if (localStorage.getItem("dark-mode") === "enabled") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class based on state
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    }
  }, [isDarkMode]);

  const totalPages = Math.ceil(contributors.length / contributorsPerPage);
  const displayedContributors = contributors.slice(
    currentPage * contributorsPerPage,
    (currentPage + 1) * contributorsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <input
        id="themeToggle"
        className="toggle"
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
      />
      <h1 className="title">Our Contributors</h1>
      <div id="contributors" className="contributors-grid">
        {displayedContributors.map((contributor) => (
          <div className="contributor-card" key={contributor.id}>
            <a
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={contributor.avatar_url} alt={contributor.login} />
            </a>
            <h2>{contributor.login}</h2>
            <p>Contributions: {contributor.contributions}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
      <button
        className="top-btn"
        id="goToTopBtn"
        onClick={() => window.scrollTo(0, 0)}
      >
        <i className="fa-solid fa-chevron-up" style={{ color: "#ffffff" }}></i>
      </button>
    </div>
  );
}

export default Contributors;
