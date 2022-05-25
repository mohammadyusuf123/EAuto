// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9_D0nhefs_1NWOrvUJCOgzqAQNHkWSO0",
  authDomain: "assingment-12-64578.firebaseapp.com",
  projectId: "assingment-12-64578",
  storageBucket: "assingment-12-64578.appspot.com",
  messagingSenderId: "946595061600",
  appId: "1:946595061600:web:bac3c286641ac506d70805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth