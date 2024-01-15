import firebase from 'firebase/compat/app' 
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBVetPFy9r8l7k64Pmj8twtnPkyUT6F5BA",
    authDomain: "todolist1101.firebaseapp.com",
    projectId: "todolist1101",
    storageBucket: "todolist1101.appspot.com",
    messagingSenderId: "889060556529",
    appId: "1:889060556529:web:be5554d3dffee082ccf350",
    measurementId: "G-5WLC2CPKRE"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('firebase iniciado')
}

const db = firebase.firestore();

export { db };