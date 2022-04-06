importScripts("https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js");
// import { environment } from "./environments/environment";
importScripts("https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js");
// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";

// const firebaseConfig = environment.firebaseConfig;
const firebaseConfig = {
  apiKey: "AIzaSyD2rchrArjL_aXprDvwkclR7X1fPoKvbh4",
  authDomain: "local-grocery-300018.firebaseapp.com",
  databaseURL: "https://local-grocery-300018-default-rtdb.firebaseio.com",
  projectId: "local-grocery-300018",
  storageBucket: "local-grocery-300018.appspot.com",
  messagingSenderId: "283273010221",
  appId: "1:283273010221:web:2e0749e238f26f54a4aca4",
  measurementId: "G-6L8CG7XSM1",
};

firebase.initializeApp({
  apiKey: "firebaseConfig.apiKey",
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
  measurementId: firebaseConfig.measurementId,
});

const messaging = firebase.messaging();
