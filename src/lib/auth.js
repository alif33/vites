
import { auth, db } from './firebase'
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup 
} from 'firebase/auth'
import {
     getFirestore,
     query,
     getDocs,
     collection,
     where,
     addDoc,
} from "firebase/firestore"
import toast from 'react-hot-toast'


async function addUserFirestore(uid, displayName, provider, email){
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      return await addDoc(collection(db, "users"), {
        uid: uid,
        name: displayName,
        authProvider: provider,
        email: email,
      });
    }
}

async function signUp(email, password) {
  try {
    const register = await createUserWithEmailAndPassword(auth, email, password);
    const user = register.user
    console.log(user);
    const saveUser = await addUserFirestore(user.uid, user.displayName, "email", user.email)
    return user
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
        toast.error('Email already exists')
      } else {
        toast.error('Internal server error')
      }
  }
}

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const saveUser = await addUserFirestore(user.uid, user.displayName, "google", user.email)
    console.log(saveUser);
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { signUp, signInWithGoogle }