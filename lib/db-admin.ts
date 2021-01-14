//@ts-nocheck
import * as admin from "firebase-admin";

let firebaseDb = null;

export default function getDb() {
  if (firebaseDb === null) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      }),

      databaseURL: "https://vcapretz-blog-default-rtdb.firebaseio.com/",
    });

    firebaseDb = admin.database();
  }

  return firebaseDb;
}
