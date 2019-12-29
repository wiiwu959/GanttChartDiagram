import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAjaQz8rNEcyRX1CDQnfT41Qvx8ypfWFN0",
    authDomain: "vueproject-307f3.firebaseapp.com",
    databaseURL: "https://vueproject-307f3.firebaseio.com",
    projectId: "vueproject-307f3",
    storageBucket: "vueproject-307f3.appspot.com",
    messagingSenderId: "965270400261",
    appId: "1:965270400261:web:82ab127529a939483c1b6c",
    measurementId: "G-RDP5JZKYE0"
};

// Get a Firestore instance
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp;