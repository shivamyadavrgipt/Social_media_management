// Contributors.jsx
import React, { useEffect, useState } from 'react';
import './Contributors.css';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contributorsPerPage = 6;

  useEffect(() => {
    // Fetch contributors data from an API or local JSON file
    fetch('/api/contributors') // Replace with the actual API endpoint
      .then(response => response.json())
      .then(data => setContributors(data))
      .catch(error => console.error('Error fetching contributors:', error));
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastContributor = currentPage * contributorsPerPage;
  const indexOfFirstContributor = indexOfLastContributor - contributorsPerPage;
  const currentContributors = contributors.slice(indexOfFirstContributor, indexOfLastContributor);

  return (
    <section className="contributors">
      <h2>Our Contributors</h2>
      <div className="contributor-cards" id="contributor-cards">
        {currentContributors.map((contributor) => (
          <div key={contributor.id} className="contributor-member">
            <img src={contributor.avatar_url} alt={contributor.name} />
            <h3>{contributor.name}</h3>
            <p>{contributor.contribution}</p>
            <button onClick={() => window.open(contributor.profile_url, '_blank')}>View Profile</button>
          </div>
        ))}
      </div>
      <div className="pagination" id="pagination">
        {[...Array(Math.ceil(contributors.length / contributorsPerPage)).keys()].map(pageNum => (
          <button
            key={pageNum + 1}
            onClick={() => handlePageChange(pageNum + 1)}
            className={pageNum + 1 === currentPage ? 'active' : ''}
          >
            {pageNum + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Contributors;
