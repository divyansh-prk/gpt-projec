// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSm0Ow6_Dm3jNPUmkil03CwwW3EqI3jIM",
  authDomain: "netflixgpt-39990.firebaseapp.com",
  projectId: "netflixgpt-39990",
  storageBucket: "netflixgpt-39990.appspot.com",
  messagingSenderId: "423787142386",
  appId: "1:423787142386:web:50bf091aab2ee7e4e7c46b",
  measurementId: "G-K25WYVFMG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
