// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9HmAgRu1miiF9MBq-4EKVLD0l6j0tR_0",
  authDomain: "tableio-2ee09.firebaseapp.com",
  projectId: "tableio-2ee09",
  storageBucket: "tableio-2ee09.firebasestorage.app",
  messagingSenderId: "399873723249",
  appId: "1:399873723249:web:9b17832a9cd34124e784d0",
  measurementId: "G-0QC079JM6X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});