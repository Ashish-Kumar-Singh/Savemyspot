
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvBERMdzRZe-mJKO3Qch2fsqX_ea-2EKM",
    authDomain: "savemy-spot.firebaseapp.com",
    databaseURL: "https://savemy-spot.firebaseio.com",
    projectId: "savemy-spot",
    storageBucket: "savemy-spot.appspot.com",
    messagingSenderId: "992890459850",
    appId: "1:992890459850:web:8ee35a0e8cb7c728718633",
    measurementId: "G-43CWYBLZS6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
