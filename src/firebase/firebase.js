import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDuyOgBSGSbXtnp5I7cBXBeMmfTPnWp7S8',
    authDomain: 'martis-bug-tracker.firebaseapp.com',
    databaseURL: 'https://martis-bug-tracker.firebaseio.com',
    projectId: 'martis-bug-tracker',
    storageBucket: 'martis-bug-tracker.appspot.com',
    messagingSenderId: '102685929723',
    appId: '1:102685929723:web:b9a9d8d36b9da1d19e805e',
    measurementId: 'G-P1PNN109W6',
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
