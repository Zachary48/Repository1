// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Feed from './components/Feed';
import ResearchPostingForm from './components/ResearchPostingForm'; // Importing ResearchPostingForm
import Researchers from './components/Researchers'; // Importing Researchers component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main page route */}
          <Route 
            path="/" 
            element={
              <div className="main-container">
                <MainContent />
                <h1>Research Related Jobs</h1>
                <Feed />
              </div>
            } 
          />

          {/* Sign-in page route */}
          <Route path="/signin" element={<Auth mode="signin" />} />

          {/* Register page route */}
          <Route path="/register" element={<Auth mode="register" />} />

          {/* Research posting page route */}
          <Route path="/post-research" element={<ResearchPostingForm />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
