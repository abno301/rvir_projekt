import { initializeApp } from 'firebase/app';
// authentication
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from "firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';
// firestore
import { getFirestore } from 'firebase/firestore';
// cloud storage
import { getStorage } from "firebase/storage";



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

const app = initializeApp(firebaseConfig);

//Za EXPO
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

//Za WEB
//const auth = initializeAuth(app);


const firestore = getFirestore();
const storage = getStorage();

export { auth, firestore, storage };