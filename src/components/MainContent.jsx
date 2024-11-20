// MainContent.jsx
import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      {/* open-positions-container  Section */}
      <section className="open-positions-container ">
      <h2>Open Positions</h2>
      <p>Connecting researchers with the perfect assistant.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <h2>Search for Research Projects</h2>
        <input type="text" placeholder="Search by skill, field, or university" />
        <button>Search</button>
      </section>

      {/* Featured Assistants Section */}
      <section className="featured">
        <h2>Featured Research Projects</h2>
        <div className="profile-cards">
          <div className="profile-card">
            <h3>John Doe</h3>
            <p>Field: Data Science</p>
            <p>Skills: Python, Machine Learning, Data Analysis</p>
          </div>
          <div className="profile-card">
            <h3>Jane Smith</h3>
            <p>Field: Environmental Science</p>
            <p>Skills: GIS, Field Research, Data Visualization</p>
          </div>
          {/* Add more profile cards as needed */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>1. Create a profile showcasing your research skills.</p>
        <p>2. Browse research projects or assistants.</p>
        <p>3. Connect with researchers and get started.</p>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <button className="cta-button">Join Now</button>
      </section>
    </main>
  );
};

export default MainContent;
