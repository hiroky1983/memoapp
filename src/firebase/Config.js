import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

export const firebaseConfig = {
  apiKey: "AIzaSyCgFBr_0kCsozpzQtlsFkmV94AJxIQ3W2o",
  authDomain: "memoapp-6586b.firebaseapp.com",
  databaseURL:
    "https://memoapp-6586b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "memoapp-6586b",
  storageBucket: "memoapp-6586b.appspot.com",
  messagingSenderId: "145419180898",
  appId: "1:145419180898:web:6081dcf29307fe4b80aa3b",
  measurementId: "G-FYLHZ19JPH",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
