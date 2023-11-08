// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;




// const firebaseConfig = {
//   apiKey: "AIzaSyApQiPuWKINIX_tqcFu5zqNDx005zwIwm8",
//   authDomain: "assignment-11-6268f.firebaseapp.com",
//   projectId: "assignment-11-6268f",
//   storageBucket: "assignment-11-6268f.appspot.com",
//   messagingSenderId: "127696441543",
//   appId: "1:127696441543:web:b88d35a057494e7839eee2"
// };
