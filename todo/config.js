import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVetPFy9r8l7k64Pmj8twtnPkyUT6F5BA",
    authDomain: "todolist1101.firebaseapp.com",
    projectId: "todolist1101",
    storageBucket: "todolist1101.appspot.com",
    messagingSenderId: "889060556529",
    appId: "1:889060556529:web:be5554d3dffee082ccf350",
    measurementId: "G-5WLC2CPKRE"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()

export { db }