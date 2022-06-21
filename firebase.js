import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqbmGi6W3riVWbR330j_PEeox8foGr-II",
  authDomain: "chatroom-8c328.firebaseapp.com",
  databaseURL:
    "https://chatroom-8c328-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatroom-8c328",
  storageBucket: "chatroom-8c328.appspot.com",
  messagingSenderId: "691204033569",
  appId: "1:691204033569:web:7446d811e17572d49fa760",
  measurementId: "G-7X9ZDP7ZHG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
