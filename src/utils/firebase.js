// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSAXjJNMkgZwrCh0lCOWqeZ6mQdlVXC2g",
  authDomain: "netflixgpt-4fbb7.firebaseapp.com",
  projectId: "netflixgpt-4fbb7",
  storageBucket: "netflixgpt-4fbb7.appspot.com",
  messagingSenderId: "392061105090",
  appId: "1:392061105090:web:54d2d31800ce3ad604dc5b",
  measurementId: "G-5SCYCLM8K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();