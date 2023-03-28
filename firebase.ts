import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo5CFI2C_uHIXQe00pdEQcpk-2X1h0by8",
  authDomain: "chatgpt-clone-3474f.firebaseapp.com",
  projectId: "chatgpt-clone-3474f",
  storageBucket: "chatgpt-clone-3474f.appspot.com",
  messagingSenderId: "969442945753",
  appId: "1:969442945753:web:fa3b0b66157117a37d2cc8"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };