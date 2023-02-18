import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjB_t8wR5pj295obSRQJsyuazzqf67yDw",
  authDomain: "alumni-tracking-system-228c8.firebaseapp.com",
  projectId: "alumni-tracking-system-228c8",
  storageBucket: "alumni-tracking-system-228c8.appspot.com",
  messagingSenderId: "373794842446",
  appId: "1:373794842446:web:c94ddc7f38c95f4fd8e01f"
};

// Siddhesh Firebase Projecct Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBHgwo-E4Xd6_zRsGLEtrN4XoE5J-phBiY",
//   authDomain: "alumni-tracking-system-ab76b.firebaseapp.com",
//   projectId: "alumni-tracking-system-ab76b",
//   storageBucket: "alumni-tracking-system-ab76b.appspot.com",
//   messagingSenderId: "719366372857",
//   appId: "1:719366372857:web:1a7fdea0f038fd2621d128"
// };

// Mahendra Configure
// const firebaseConfig = {
//   apiKey: "AIzaSyBOsxO6RJsvPEefjDl5UltRuBN1dm-18qk",
//   authDomain: "alumni-tracking-system-ca661.firebaseapp.com",
//   projectId: "alumni-tracking-system-ca661",
//   storageBucket: "alumni-tracking-system-ca661.appspot.com",
//   messagingSenderId: "679154079297",
//   appId: "1:679154079297:web:0274c5f7b52da9c62e58c0"
// };

// Currently working
// const firebaseConfig = {
//   apiKey: "AIzaSyB-KnFz8cqrTf1cOYqizC9IjOzzK_6OmgY",
//   authDomain: "alumni-tracking-system-13a12.firebaseapp.com",
//   projectId: "alumni-tracking-system-13a12",
//   storageBucket: "alumni-tracking-system-13a12.appspot.com",
//   messagingSenderId: "347051140430",
//   appId: "1:347051140430:web:ded7c7a7b21edb72b92a1f"
// };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
