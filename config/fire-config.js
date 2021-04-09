import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBzi7hNPNCnrPqsQ9KgdzSf6uRDPe6W6IY",
  authDomain: "nextjs-firebase-57bfb.firebaseapp.com",
  databaseURL: "YOUR DATABASE URL",
  projectId: "nextjs-firebase-57bfb",
  storageBucket: "nextjs-firebase-57bfb.appspot.com",
  messagingSenderId: "525619999648",
  appId: "1:525619999648:web:b677c44562ddecd1efaac5",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
