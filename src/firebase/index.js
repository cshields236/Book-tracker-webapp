import firebase from 'firebase/app'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTkukgBklPNZq3xTe0py-EMlVe9V5smBg",
    authDomain: "book-tracker-696b0.firebaseapp.com",
    databaseURL: "https://book-tracker-696b0.firebaseio.com",
    projectId: "book-tracker-696b0",
    storageBucket: "book-tracker-696b0.appspot.com",
    messagingSenderId: "594475403461",
    appId: "1:594475403461:web:1058b4bb130d0c56c708ac",
    measurementId: "G-1YS3R2DF4X"
  };

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

  export {storage, firebase as default}; 