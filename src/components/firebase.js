
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABbIBKNz4s-9bvLydwc7KDKmB9Z4ibOQg",
  authDomain: "login-auth-711b5.firebaseapp.com",
  projectId: "login-auth-711b5",
  storageBucket: "login-auth-711b5.appspot.com",
  messagingSenderId: "817626547099",
  appId: "1:817626547099:web:6a8341afc905fc17ded73e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;