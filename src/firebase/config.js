import firebase  from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCzaF0otTf3pKHS2XLGRVnEj4reOM0T3zU",
    authDomain: "missionapp-d1bb1.firebaseapp.com",
    projectId: "missionapp-d1bb1",
    storageBucket: "missionapp-d1bb1.appspot.com",
    messagingSenderId: "120904349442",
    appId: "1:120904349442:web:a59040a320cdf709eeb41b"
  };


//   init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }