// Initialize Firebase
import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyDo8JPYxtypGEuNsXwkAEszoW5Sjr6z9Fs',
  authDomain: 'pasteit-84c04.firebaseapp.com',
  databaseURL: 'https://pasteit-84c04.firebaseio.com',
  projectId: 'pasteit-84c04',
  storageBucket: 'pasteit-84c04.appspot.com',
  messagingSenderId: '97814606005'
}

export const app = firebase.initializeApp(config)
export const db = app.database()
