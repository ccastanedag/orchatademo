import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDhAFKkY3sjPmZMT9ZN3_k5YCYiv07OqGI",
  authDomain: "orchata-9b2a5.firebaseapp.com",
  databaseURL: "https://orchata-9b2a5.firebaseio.com",
  projectId: "orchata-9b2a5",
  storageBucket: "orchata-9b2a5.appspot.com",
  messagingSenderId: "544369214312",
  appId: "1:544369214312:web:714ade53ec675da8f18cdd"
};
firebase.initializeApp(config);
let db = firebase.firestore()

export default db