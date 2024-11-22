import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Auth.css';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import GoogleAuth from './GoogleAuth';

const Auth = ({ mode }) => {
  const navigate = useNavigate(); // Initialize navigate
  const isRegister = mode === 'register';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAuth = async () => {
    try {
      if (isRegister) {
        // Registration logic here
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('Sign-in successful!');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isRegister ? 'Register' : 'Sign In'}</h2>
        <p>Welcome! Please {isRegister ? 'register' : 'sign in'} to continue.</p>

       
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

        {/* Return to Home link */}
        <button className="auth-return-home" onClick={() => navigate('/')}>
          Return to Home Page
        </button>
      </div>
    </div>
  );
};

export default Auth;
