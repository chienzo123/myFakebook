import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyCe8Ev0ejRJt6YF5PIrDlOUvdUN6Uvt2mg",
  authDomain: "fakebook-584d9.firebaseapp.com",
  databaseURL: "https://fakebook-584d9-default-rtdb.firebaseio.com",
  projectId: "fakebook-584d9",
  storageBucket: "fakebook-584d9.appspot.com",
  messagingSenderId: "1092377336594",
  appId: "1:1092377336594:web:a81ed39432d181dd9eb1cb",
  measurementId: "G-NEXGQZPPXX"
};
// Initialize Firebase
export const db =firebase.initializeApp(firebaseConfig);

 export var datab = firebase.database().ref('post/');
 


 export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};
export default firebase;