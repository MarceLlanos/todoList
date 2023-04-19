// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDDxQ01RZpVr4bBFMEBp1_BhNyXB1i4kko',
	authDomain: 'todoapp-96b84.firebaseapp.com',
	projectId: 'todoapp-96b84',
	storageBucket: 'todoapp-96b84.appspot.com',
	messagingSenderId: '439321026721',
	appId: '1:439321026721:web:1f629e0dd372f0bd0610e0',
	measurementId: 'G-H85V7MYD78',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { firestore, auth, googleProvider };
