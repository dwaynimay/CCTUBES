// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjWTLiqvVYrwkQRNBr_VFK3dqFPxz9oLQ",
  authDomain: "tubes-kelompok-6-5cb48.firebaseapp.com",
  projectId: "tubes-kelompok-6-5cb48",
  storageBucket: "tubes-kelompok-6-5cb48.firebasestorage.app",
  messagingSenderId: "539360090204",
  appId: "1:539360090204:web:d973b25a67c22f97bd2e99",
  measurementId: "G-X28CWP292L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export { app, analytics, db };
