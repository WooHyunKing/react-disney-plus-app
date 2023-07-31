// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2xwE51DfnGIEabeZ_eLejmpqo-NoWG2c",
  authDomain: "react-disney-plus-app-892cc.firebaseapp.com",
  projectId: "react-disney-plus-app-892cc",
  storageBucket: "react-disney-plus-app-892cc.appspot.com",
  messagingSenderId: "156730087153",
  appId: "1:156730087153:web:a24b351269ec2d2f2cbb50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
