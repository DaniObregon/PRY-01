import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGLTVOmSCvFRVUohhlSkDs8KFCBGBZcGc",
  authDomain: "pry-01.firebaseapp.com",
  projectId: "pry-01",
  storageBucket: "pry-01.appspot.com",
  messagingSenderId: "789922655065",
  appId: "1:789922655065:web:a32b6351a1026dd87ffa48",
  measurementId: "G-8DM6KJHTY7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
