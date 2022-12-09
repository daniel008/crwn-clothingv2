import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD02_Ej9Y9CbZFHXXz6eellzrMEoxKnA2w',
  authDomain: 'crwn-clothingv2-db.firebaseapp.com',
  projectId: 'crwn-clothingv2-db',
  storageBucket: 'crwn-clothingv2-db.appspot.com',
  messagingSenderId: '97389849515',
  appId: '1:97389849515:web:1586756096816c2d0980ee',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
