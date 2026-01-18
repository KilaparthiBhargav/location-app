// Import required Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ ADD THIS

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJLYdw_IYKz-Z5q43lmKAMBMMm6ZmvTJs",
  authDomain: "location-app-c40d0.firebaseapp.com",
  projectId: "location-app-c40d0",
  storageBucket: "location-app-c40d0.appspot.com",
  messagingSenderId: "919642889107",
  appId: "1:919642889107:web:c2bfc9e098637d68df6666",
  measurementId: "G-J85LGM3KC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore DB
export const db = getFirestore(app);
