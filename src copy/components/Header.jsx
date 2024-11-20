// Header.jsx
import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="centered-header">
      <div className="header-content">
        <h1>Welcome to Research Finder</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/signin" className="nav-link">Sign In</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <Link to="/post-research" className="nav-link">Post research position </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
