import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCp01hKiZ2mFHhMxkjXEIWnliuM9rfyRwQ",
  authDomain: "starbucks-react.firebaseapp.com",
  projectId: "starbucks-react",
  storageBucket: "starbucks-react.appspot.com",
  messagingSenderId: "699980036884",
  appId: "1:699980036884:web:861167b480845ac9862001",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
