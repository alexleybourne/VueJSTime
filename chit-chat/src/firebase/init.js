import firebase from 'firebase'
import firestore from 'firebase/firestore'

const key = process.env.VUE_APP_FIREBASEKEY
const domain = process.env.VUE_APP_AUTHDOMAIN

var firebaseConfig = {
    apiKey: key,
    authDomain: domain,
    databaseURL: "https://chitchat-al.firebaseio.com",
    projectId: "chitchat-al",
    storageBucket: "chitchat-al.appspot.com",
    messagingSenderId: "1073520410567",
    appId: "1:1073520410567:web:ab5358f8e41fd5faaea3e2",
    measurementId: "G-83DV2WXM13"
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics()

//   export firestore database
export default firebaseApp.firestore()