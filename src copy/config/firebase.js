// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDviHmbNMxNtzvG5ZvZBOqgt2tt2fCxcOU",
  authDomain: "research-finder-1000.firebaseapp.com",
  projectId: "research-finder-1000",
  storageBucket: "research-finder-1000.firebasestorage.app",
  messagingSenderId: "90727380837",
  appId: "1:90727380837:web:7ac4c1b13e26cfecb3538c",
  measurementId: "G-7MKKN551YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { auth };