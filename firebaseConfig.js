import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCixeAzrGuG4LZAhM-AGkGh-ZDM97sQo-c",
    authDomain: "bpjs-backend.firebaseapp.com",
    projectId: "bpjs-backend",
    storageBucket: "bpjs-backend.appspot.com",
    messagingSenderId: "116704040069",
    appId: "1:116704040069:web:4ee07c2234f85ed85905ec",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
