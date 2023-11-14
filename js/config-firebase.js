// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmDkUEtSZGxLjTHhYQDcnpODKa8tSw6LA",
  authDomain: "dplconstrucoes-ecd2c.firebaseapp.com",
  projectId: "dplconstrucoes-ecd2c",
  storageBucket: "dplconstrucoes-ecd2c.appspot.com",
  messagingSenderId: "915833955518",
  appId: "1:915833955518:web:912a95c12c7559ac3e2aef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

