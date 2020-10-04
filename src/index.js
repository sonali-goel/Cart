import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXYxMvixs03vKZrLOMRkoXD-KhcGrKFuI",
  authDomain: "cart-f89e4.firebaseapp.com",
  databaseURL: "https://cart-f89e4.firebaseio.com",
  projectId: "cart-f89e4",
  storageBucket: "cart-f89e4.appspot.com",
  messagingSenderId: "144791452434",
  appId: "1:144791452434:web:f8a4a3a2a867a7ed3451cb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


