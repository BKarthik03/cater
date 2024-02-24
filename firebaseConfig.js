// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
// Initialize Firebase Auth with AsyncStorage for persistence

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH476IhXz9VSXw5kqve_fJmU3zBKf0iTs",
  authDomain: "caterconnect-87e6f.firebaseapp.com",
  projectId: "caterconnect-87e6f",
  storageBucket: "caterconnect-87e6f.appspot.com",
  messagingSenderId: "928251296044",
  appId: "1:928251296044:web:c202f573c0fdc0efa49489",
  measurementId: "G-24TRSJJWZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {app,auth,db};