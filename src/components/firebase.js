import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6E-iWcSn7YVizNzWeejVFgHVl09BZ9K4",
    authDomain: "react-website-d438b.firebaseapp.com",
    databaseURL: "https://react-website-d438b.firebaseio.com",
    projectId: "react-website-d438b",
    storageBucket: "react-website-d438b.appspot.com",
    messagingSenderId: "815824894491",
    appId: "1:815824894491:web:736fd794d9169b0bba56be",
    measurementId: "G-ZPB36N6YPT"
});

const auth = firebaseApp.auth();

export { auth };