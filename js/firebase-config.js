import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoydVQgD1x-DyktrA5S5rWOdmhm9lsokk",
  authDomain: "websitedesignagency-78afe.firebaseapp.com",
  projectId: "websitedesignagency-78afe",
  storageBucket: "websitedesignagency-78afe.appspot.com",
  messagingSenderId: "937369412374",
  appId: "1:937369412374:web:a5b036cd9c3b7d9f586637"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
