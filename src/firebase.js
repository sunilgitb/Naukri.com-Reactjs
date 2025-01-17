import firebase from "firebase/compat/app" 
import "firebase/compat/auth" 
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyApmZB36B7laWKCSSQwg9dTUN3e-pxmP0I",
  authDomain: "phoneotp-51be2.firebaseapp.com",
  databaseURL: "https://phoneotp-51be2-default-rtdb.firebaseio.com",
  projectId: "phoneotp-51be2",
  storageBucket: "phoneotp-51be2.appspot.com",
  messagingSenderId: "831921641811",
  appId: "1:831921641811:web:bc9a7074435ff0a1df69a6",
  measurementId: "G-2BZ5PNXJR5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const db = firebase.firestore()
  export {auth,provider,db}
