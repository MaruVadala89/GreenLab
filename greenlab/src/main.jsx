import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBXYNuqAAf3QIELkS2sQv-D1LNVfGJVFIc",
  authDomain: "adoptaunaplanta-1cf25.firebaseapp.com",
  projectId: "adoptaunaplanta-1cf25",
  storageBucket: "adoptaunaplanta-1cf25.appspot.com",
  messagingSenderId: "690068335489",
  appId: "1:690068335489:web:136554609c173310e21680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
