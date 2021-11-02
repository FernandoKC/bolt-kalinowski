import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHexgCS7QqepddgmzyLu_jPqivA_80Km0",
  authDomain: "store-kalinowski.firebaseapp.com",
  projectId: "store-kalinowski",
  storageBucket: "store-kalinowski.appspot.com",
  messagingSenderId: "423108757332",
  appId: "1:423108757332:web:76871b212f1dc2ac07aac1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
