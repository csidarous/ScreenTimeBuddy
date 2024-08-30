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
  apiKey: "AIzaSyB4j0F5IIwTtc9HTCnSVtHs3Aw_dXpof0g",
  authDomain: "screentime-buddie-v1.firebaseapp.com",
  projectId: "screentime-buddie-v1",
  storageBucket: "screentime-buddie-v1.appspot.com",
  messagingSenderId: "95677609658",
  appId: "1:95677609658:web:926a7820e5e65dd6d73483",
  measurementId: "G-9SC9FC4HDH"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// export const analytics = getAnalytics(app);