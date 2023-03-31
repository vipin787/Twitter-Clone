import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVSecx6iP1YHwvBQHs2rM9EXTG8hr3CZQ",
  authDomain: "twitter-clone-671df.firebaseapp.com",
  databaseURL: "https://twitter-clone-671df-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "twitter-clone-671df",
  storageBucket: "twitter-clone-671df.appspot.com",
  messagingSenderId: "1019528488947",
  appId: "1:1019528488947:web:bcd4b9528a6b1204a11486",
  measurementId: "G-521C2TEC5X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
