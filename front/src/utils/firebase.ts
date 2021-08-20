import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "kertesz-portfolio",
  storageBucket: process.env.REACT_APP_FIREBASE_SORAGE_BUCKET,
  messagingSenderId: "264755473485",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-KSB4YQHGWK",
};

export const appInit = (): void => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
};
const db = firebase.database();
const storage = firebase.storage();
export { db, storage };
