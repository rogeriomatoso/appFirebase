import firebase from 'firebase/app';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyDmASH0TosbXKe5tm_PnmfAHvLF_KRC2xY",
    authDomain: "appfirebase-961e5.firebaseapp.com",
    projectId: "appfirebase-961e5",
    storageBucket: "appfirebase-961e5.appspot.com",
    messagingSenderId: "384600887634",
    appId: "1:384600887634:web:a8d51c0eeb471d4622ea8b",
    measurementId: "G-CWYNNDXM04"
  };

  // Initialize Firebase

  if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;