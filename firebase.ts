// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8SV11VhCDb4-9LS7CZz96dMR7XRBr-5E",
  authDomain: "react-native-d4412.firebaseapp.com",
  projectId: "react-native-d4412",
  storageBucket: "react-native-d4412.appspot.com",
  messagingSenderId: "472293410814",
  appId: "1:472293410814:web:2dbec4b278fc8c86eb62af",
  measurementId: "G-CP9JS6WVMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const db = getFirestore();
