
 

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 
 
  // Your web app's Firebase configuration
 const firebaseConfig = {

  apiKey: "AIzaSyDKAxo--9ty2t4PRSQG2_MV47K3w0JsKSc",

  authDomain: "new-diet.firebaseapp.com",

  projectId: "new-diet",

  storageBucket: "new-diet.appspot.com",

  messagingSenderId: "555542102605",

  appId: "1:555542102605:web:4665cb8e689f0235951204"

};


  // Use this to initialize the firebase App
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const analytics = getAnalytics(app);
  
  export {db};


