import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkJYtUMML6RU9C2yzTtMbSjZmvaag3-9Q",
  authDomain: "alumni-tracking-system-2df7e.firebaseapp.com",
  projectId: "alumni-tracking-system-2df7e",
  storageBucket: "alumni-tracking-system-2df7e.appspot.com",
  messagingSenderId: "254735730090",
  appId: "1:254735730090:web:38d6451257d774b35c17d3",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
