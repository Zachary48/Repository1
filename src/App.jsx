import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Auth mode="signin" />} />
        <Route path="/register" element={<Auth mode="register" />} />
      </Routes>
    </Router>
  );
}

export default App;
