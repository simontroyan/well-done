import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsPacuNbyzVueNVFKnaoy9PCM_8hiZfHo",
  authDomain: "welldone-team.firebaseapp.com",
  databaseURL: "https://welldone-team.firebaseio.com",
  projectId: "welldone-team",
  storageBucket: "welldone-team.appspot.com",
  messagingSenderId: "251809995121",
  // appId: "1:251809995121:web:623601112f6d3664913ed0",
  // measurementId: "G-QSY62RR9XY",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firbasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firbasePromotions,
  firebaseTeams,
  firebaseDB,
  firebasePlayers,
};
