import React from 'react';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';

const GoogleAuth = ({ isRegister }) => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google Sign-In successful:', result.user); // Debug log
    } catch (error) {
      console.error(`Google Sign-In Error: ${error.message}`); // Debug log for errors
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>
      {isRegister ? 'Register with Google' : 'Sign In with Google'}
    </button>
  );
};

export default GoogleAuth;
