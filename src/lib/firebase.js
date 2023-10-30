import { initializeApp } from 'firebase/app'
import { getAuth,  } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDuiTN1l0WKrWOReASQEDzEvOslbvBxcMQ",
  authDomain: "medi-verse-26f3a.firebaseapp.com",
  projectId: "medi-verse-26f3a",
  storageBucket: "medi-verse-26f3a.appspot.com",
  messagingSenderId: "609820478869",
  appId: "1:609820478869:web:0d4638260024ffd1a2fa9c",
  measurementId: "G-JJEK7R6VY2"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
