// Auth.jsx
import './Auth.css';
import React, { useState } from 'react';
import { auth } from '../config/firebase'; // Firebase configuration
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Firebase auth functions
import GoogleAuth from './GoogleAuth'; // Google auth component

const Auth = ({ mode }) => {
  const isRegister = mode === 'register'; // Check if the mode is 'register'
  const [email, setEmail] = useState(''); // State for storing user email
  const [password, setPassword] = useState(''); // State for storing user password
  const [message, setMessage] = useState(''); // State for displaying messages

  // Handle authentication for register or sign-in
  const handleAuth = async () => {
    try {
      if (isRegister) {
        // Register new user
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage('User registered successfully');
      } else {
        // Sign in existing user
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('User signed in successfully');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`); // Displays error message
    }
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <h3>{isRegister ? 'Register' : 'Sign In'}</h3> {/* Display heading based on mode */}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Updates email state
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Updates password state
        />
        <button onClick={handleAuth}>{isRegister ? 'Register' : 'Sign In'}</button> {/* Button changes based on mode */}
        <p>{message}</p> {/* Displays authentication messages */}
        
        {/* Google Sign-In Button */}
        <div style={{ marginTop: '20px' }}>
          <p>Or {isRegister ? 'register' : 'sign in'} with Google</p>
          <GoogleAuth isRegister={isRegister} /> {/* Google Auth component */}
        </div>

        {/* Link to toggle between register and sign-in */}
        <p>
          {isRegister ? "Already have an account?" : "Don't have an account?"}{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            <a href={isRegister ? "/signin" : "/register"} style={{ color: 'blue', textDecoration: 'underline' }}>
              {isRegister ? 'Sign In' : 'Register'}
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
