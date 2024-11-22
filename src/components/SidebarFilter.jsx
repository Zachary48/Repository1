import React from 'react';
import './SidebarFilter.css'; // Add styles for the sidebar

const SidebarFilter = ({ filters, onFilterChange }) => {
  return (
    <aside className="sidebar">
      <h3>Filters</h3>
      <ul>
        {filters.map((filter, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={filter.value}
                onChange={() => onFilterChange(filter.value)}
              />
              {filter.label}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarFilter;
