import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCUnhmWggraFjd2nvI-0Ivk4-eSXCRkgE",
  authDomain: "chat-pdf-57218.firebaseapp.com",
  projectId: "chat-pdf-57218",
  storageBucket: "chat-pdf-57218.appspot.com",
  messagingSenderId: "1079660045742",
  appId: "1:1079660045742:web:3bfa70c11c1198abd8143f",
  measurementId: "G-P3CB06KF0L"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
