import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBhL-Qfcggr2PEj0Q-oJXHWVO0RcM7F5aY",
    authDomain: "perpustakaan-353f8.firebaseapp.com",
    databaseURL: "https://perpustakaan-353f8-default-rtdb.firebaseio.com",
    projectId: "perpustakaan-353f8",
    storageBucket: "perpustakaan-353f8.appspot.com",
    messagingSenderId: "531391690153",
    appId: "1:531391690153:web:ce9f783ee8ac479c06c0b8",
    measurementId: "G-72LJ0Q16DW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;
