import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* User page route */}
        <Route path="/user" element={<UserPage />} />

        {/* Authentication routes */}
        <Route path="/signin" element={<Auth mode="signin" />} />
        <Route path="/register" element={<Auth mode="register" />} />
      </Routes>
    </Router>
  );
}

export default App;
