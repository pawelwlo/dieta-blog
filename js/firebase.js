
 
// Import necessary Firebase modules from the locally installed package
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRkumXWdsx_YER65uUDLyw0YYdRyn-2CE",
  authDomain: "diet-blog-b8ca5.firebaseapp.com",
  projectId: "diet-blog-b8ca5",
  storageBucket: "diet-blog-b8ca5.appspot.com",
  messagingSenderId: "1086895413120",
  appId: "1:1086895413120:web:9159ecdebe13c4b29f9365"
};

// Initialize Firebase using the locally imported firebase object and configuration
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const analytics = app.analytics();

export { db, analytics };
