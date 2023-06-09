import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBKbAjl46AAoUdNK_aVnw6-Ao-Q6HdYEFc",
  authDomain:"annonymous-chat-app.firebaseapp.com",
  projectId: "annonymous-chat-app",
  storageBucket: "annonymous-chat-app.appspot.com",
  messagingSenderId: "430218965868",
  appId: "1:430218965868:web:dba30433265be2300ef949",
  measurementId: "G-EEE0M81Z8K",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export  { app, db, auth };
