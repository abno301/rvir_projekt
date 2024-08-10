// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from '@react-native-firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa_qICmpk5pyrN0pB9wTe8x576fzidkGk",
  authDomain: "reactnative-d18e6.firebaseapp.com",
  projectId: "reactnative-d18e6",
  storageBucket: "reactnative-d18e6.appspot.com",
  messagingSenderId: "501007500594",
  appId: "1:501007500594:web:8f41e543c21909eb58c32b"
};

// Initialize Firebase

export const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
