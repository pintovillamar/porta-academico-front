// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhJESEQzjjZz7KcD16Ywag7mVTsC-P1bY",
  authDomain: "webestudiantes-55cd2.firebaseapp.com",
  databaseURL: "https://webestudiantes-55cd2-default-rtdb.firebaseio.com",
  projectId: "webestudiantes-55cd2",
  storageBucket: "webestudiantes-55cd2.appspot.com",
  messagingSenderId: "565309443969",
  appId: "1:565309443969:web:2b013d6a0281ac5376a280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
const database = getDatabase(app);

export { database, ref, onValue };
