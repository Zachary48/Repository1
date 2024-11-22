import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SidebarFilter from './SidebarFilter'; // Import SidebarFilter component

function Home() {
  const navigate = useNavigate(); // Initialize navigate function
  const [selectedFilters, setSelectedFilters] = useState([]); // State for selected filters

  const filters = [
    { label: 'Department', value: 'department' },
    { label: 'Research Type', value: 'researchType' },
    { label: 'Location', value: 'location' },
  ];

  // Function to handle filter changes
  const handleFilterChange = (filterValue) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filterValue)
        ? prevFilters.filter((f) => f !== filterValue) // Remove filter if already selected
        : [...prevFilters, filterValue] // Add new filter
    );
  };

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
        {/* Sidebar with filters */}
        <SidebarFilter filters={filters} onFilterChange={handleFilterChange} />

        {/* Research Postings */}
        <div className="postings-container">
          <h2>Research Opportunities</h2>
          <p>Selected Filters: {selectedFilters.join(', ') || 'None'}</p>
          {/* Add content dynamically based on selectedFilters */}
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
