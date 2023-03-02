// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUzLfVRBpdE4lyqMDnwuxb0dyNStP-C9c",
    authDomain: "facebook-clone-55c2e.firebaseapp.com",
    projectId: "facebook-clone-55c2e",
    storageBucket: "facebook-clone-55c2e.appspot.com",
    messagingSenderId: "676339949325",
    appId: "1:676339949325:web:f522383b67cb1142219a44",
    measurementId: "G-357MWJ48N2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;