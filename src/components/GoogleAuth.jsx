// GoogleAuth.jsx
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

const GoogleAuth = () => {
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User signed in with Google");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <button onClick={signInWithGoogle} className="google-signin-button">
      Sign In with Google
    </button>
  );
};

export default GoogleAuth;
