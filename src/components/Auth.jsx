import React, { useState } from 'react';
import './Auth.css'; // Add styles here
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
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage('User registered successfully');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('User signed in successfully');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isRegister ? 'Register' : 'Sign In'}</h2>
        <p>Welcome! Please {isRegister ? 'create an account' : 'sign in'} to continue.</p>

        <button className="auth-google-button">
  <img src="/assets/google-icon.png" alt="Google icon" className="google-icon" />
  Continue with Google
</button>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-submit-button" onClick={handleAuth}>
          {isRegister ? 'Register' : 'Sign In'}
        </button>

        <p className="auth-message">{message}</p>

        <p className="auth-toggle">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{' '}
          <a href={isRegister ? '/signin' : '/register'}>
            {isRegister ? 'Sign In' : 'Register'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
