import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDqZZqYtc4hv57njGmF54bKpexACLRUazo",
  authDomain: "olx-clone-3de64.firebaseapp.com",
  projectId: "olx-clone-3de64",
  storageBucket: "olx-clone-3de64.appspot.com",
  messagingSenderId: "1014145461483",
  appId: "1:1014145461483:web:c904c55cb1bee92b73e2ae",
  measurementId: "G-EYRV9DTPGG"
};

  export default firebase.initializeApp(firebaseConfig) 