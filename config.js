import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCYt0ng2CTpgVvi9yLg7S5bcOfkj2MpICc",
    authDomain: "e-ride-41dbf.firebaseapp.com",
    projectId: "e-ride-41dbf",
    storageBucket: "e-ride-41dbf.appspot.com",
    messagingSenderId: "752531545068",
    appId: "1:752531545068:web:b107efc38666be48cd3ec9",
    measurementId: "G-XZ9C5RJPPW"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
