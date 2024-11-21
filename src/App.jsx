import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth'; // Import the Auth component
import Home from './components/Home'; // Import the Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/signin" element={<Auth mode="signin" />} /> {/* Sign In */}
        <Route path="/register" element={<Auth mode="register" />} /> {/* Register */}
      </Routes>
    </Router>
  );
}

export default App;
