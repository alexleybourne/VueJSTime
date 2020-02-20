import firebase from 'firebase'
import firestore from 'firebase/firestore'

const key = process.env.VUE_APP_FIREBASEKEY
const domain = process.env.VUE_APP_AUTHDOMAIN

var firebaseConfig = {
    apiKey: key,
    authDomain: domain,
    databaseURL: "https://smoothiebook-al.firebaseio.com",
    projectId: "smoothiebook-al",
    storageBucket: "smoothiebook-al.appspot.com",
    messagingSenderId: "37121982286",
    appId: "1:37121982286:web:3900c64b25615ded90a81f",
    measurementId: "G-H5RSXRW0TN"
  }

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  firebase.analytics()

//   export firestore database

export default firebaseApp.firestore()