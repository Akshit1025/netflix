import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDmffJtDRhcy8d4F93FFxwyPwXMyQzuppg",
  authDomain: "netflix-3f8e3.firebaseapp.com",
  databaseURL: "https://netflix-3f8e3.firebaseio.com",
  projectId: "netflix-3f8e3",
  storageBucket: "netflix-3f8e3.appspot.com",
  messagingSenderId: "524819047211",
  appId: "1:524819047211:web:3627559e83047ad7291b6e"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
