import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Home() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="logo">Research Finder</div>
        <input
          type="text"
          placeholder="Search research postings..."
          className="search-bar"
        />
        <div className="header-buttons">
          {/* Add onClick to navigate to /signin */}
          <button
            className="btn sign-in-button"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Filters</h3>
          <ul>
            <li>Department</li>
            <li>Research Type</li>
            <li>Location</li>
          </ul>
        </aside>

        {/* Research Postings */}
        <div className="postings-container">
          <h2>Research Opportunities</h2>
          {/* Content goes here */}
        </div>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2024 Research Finder. All rights reserved.</p>
        <a href="/terms">Terms of Service</a>
        <a href="/help">Help</a>
      </footer>
    </div>
  );
}

export default Home;
