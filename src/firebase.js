import "firebase/compat/database";
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyCjtPwfyyCfyE2bLpDpMctHUQvZbAT3HP4",
    authDomain: "react-con-70507.firebaseapp.com",
    projectId: "react-con-70507",
    storageBucket: "react-con-70507.appspot.com",
    messagingSenderId: "455609181063",
    appId: "1:455609181063:web:94fe1801db27609682e922"
  };
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();