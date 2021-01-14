//@ts-nocheck
import firebase from "firebase/app";
import "firebase/database";

let firebaseDb = null;

export default function getDb() {
  if (firebaseDb === null) {
    firebase.initializeApp({
      databaseURL: "https://vcapretz-blog-default-rtdb.firebaseio.com/",
    });

    firebaseDb = firebase.database();
  }

  return firebaseDb;
}
