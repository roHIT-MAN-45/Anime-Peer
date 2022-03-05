import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3wCRiNfflCUE3fh_u85bBOwM7fAdS66s",
  authDomain: "anime-peer.firebaseapp.com",
  projectId: "anime-peer",
  storageBucket: "anime-peer.appspot.com",
  messagingSenderId: "408804799239",
  appId: "1:408804799239:web:30e07ef1b12c29aae44ba2",
  measurementId: "G-7TSK0DPP4T",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
