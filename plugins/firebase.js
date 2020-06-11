import * as firebase from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBEmYdUWNCgdtpokKESrSra4x8DTtj5MYw",
  authDomain: "nuxttodo-e03a9.firebaseapp.com",
  databaseURL: "https://nuxttodo-e03a9.firebaseio.com",
  projectId: "nuxttodo-e03a9",
  storageBucket: "nuxttodo-e03a9.appspot.com",
  messagingSenderId: "879024129877",
  appId: "1:879024129877:web:fde08cdf952bb5d195d1dc",
  measurementId: "G-LZLHZD9T71"
};

var app = null;

if (!firebase.apps.length) {
  // Initialize Firebase
  app = firebase.initializeApp(firebaseConfig);
}
