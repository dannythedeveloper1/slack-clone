// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyDhxhiV0UODe3XY-tcf60uM6IFP6tLRw5I",
	authDomain: "slack-clone-332d8.firebaseapp.com",
	projectId: "slack-clone-332d8",
	storageBucket: "slack-clone-332d8.appspot.com",
	messagingSenderId: "840730265561",
	appId: "1:840730265561:web:0b2b04faab8772c591fbc8",
	measurementId: "G-HRWYKX5DGH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }

