// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdH361SH3QznDX8FkMVqSmTEOaZfLQpLI",
  authDomain: "screentime-buddie.firebaseapp.com",
  projectId: "screentime-buddie",
  storageBucket: "screentime-buddie.appspot.com",
  messagingSenderId: "80722602543",
  appId: "1:80722602543:web:d9a190b6822b9838fb74da",
  measurementId: "G-C57V7281VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);