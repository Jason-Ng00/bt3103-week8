import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBD5pp4_aQwVbqjCYAJSZqaP8IjW5x8Q8Y",
    authDomain: "bt3103-week-6-6ab43.firebaseapp.com",
    projectId: "bt3103-week-6-6ab43",
    storageBucket: "bt3103-week-6-6ab43.appspot.com",
    messagingSenderId: "764505550067",
    appId: "1:764505550067:web:c23d61b1136ed1bdbedb86",
    measurementId: "G-XBQ44YWXKL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
