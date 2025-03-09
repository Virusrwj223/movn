// firebaseClient.ts
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY ?? "DEFAULT",
  authDomain: process.env.FB_AUTH_DOMAIN ?? "DEFAULT",
  projectId: process.env.FB_PROJECT_ID ?? "DEFAULT",
  storageBucket: process.env.FB_STORAGE_BUKET ?? "DEFAULT",
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID ?? "DEFAULT",
  appId: process.env.FB_APP_ID ?? "DEFAULT",
  measurementId: process.env.FB_MEASUREMENT_ID ?? "DEFAULT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
