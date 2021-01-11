// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBh-3QUQk5D8_aWh4t_RAvu1a-X8Nl0I0Q",
	authDomain: "fullclone-74a4e.firebaseapp.com",
	projectId: "fullclone-74a4e",
	storageBucket: "fullclone-74a4e.appspot.com",
	messagingSenderId: "506589059611",
	appId: "1:506589059611:web:d705fc90068cae358436be",
	measurementId: "G-ENV5F11MQX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// RT DB
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
