import React from 'react';
import './Home.css';
import Feed from './Feed'; // Import Feed component

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="logo">Research Finder</div>
        <input type="text" placeholder="Search research postings..." className="search-bar" />
        <div className="header-buttons">
          <button className="btn">Sign In</button>
          <button className="btn btn-primary">Post a Research Position</button>
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
          <Feed /> {/* Integrated Feed component */}
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
