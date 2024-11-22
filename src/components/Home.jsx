import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="logo">Research Finder</div>
        <input type="text" placeholder="Search research postings..." className="search-bar" />
        <div className="header-buttons">
          <button className="btn" onClick={() => navigate('/signin')}>Sign In</button> {/* Navigate to Sign-In */}
          <button className="btn btn-primary" onClick={() => navigate('/register')}>Post a Research Position</button>
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
