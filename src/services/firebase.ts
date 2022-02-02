import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyC5T7Lcm3xBAmF8wnRPvKp1EdAqFJxNPcQ",
  authDomain: "chat-app-86169.firebaseapp.com",
  projectId: "chat-app-86169",
  storageBucket: "chat-app-86169.appspot.com",
  messagingSenderId: "117205100106",
  appId: "1:117205100106:web:3115ca616866f9681ae8b3",
});

// Initialize Firebase
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
