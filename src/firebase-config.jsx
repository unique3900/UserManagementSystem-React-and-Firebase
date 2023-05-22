import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApqqkw6cN8HS3I3eB87J8zjCXrvfEF4xk",
    authDomain: "usermanagementsystem-bf2bb.firebaseapp.com",
    projectId: "usermanagementsystem-bf2bb",
    storageBucket: "usermanagementsystem-bf2bb.appspot.com",
    messagingSenderId: "166754781240",
    appId: "1:166754781240:web:92fe9e09bd235e38d4becd"
};
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);