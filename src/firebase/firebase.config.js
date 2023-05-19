// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAci2x9ORsjVRwaMmE3v-_lBgJw26FyDiE",
  authDomain: "musical-toys.firebaseapp.com",
  projectId: "musical-toys",
  storageBucket: "musical-toys.appspot.com",
  messagingSenderId: "23601806387",
  appId: "1:23601806387:web:a659c4a2349fb5acf93746",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
