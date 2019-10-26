import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import API_KEY from './firebaseApi';

const config = {
    apiKey: API_KEY,
    authDomain: "crwn-db-6ea58.firebaseapp.com",
    databaseURL: "https://crwn-db-6ea58.firebaseio.com",
    projectId: "crwn-db-6ea58",
    storageBucket: "crwn-db-6ea58.appspot.com",
    messagingSenderId: "932245464222",
    appId: "1:932245464222:web:d5ac20bd6ccbeb1fde878f",
    measurementId: "G-4XS8N266FM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
