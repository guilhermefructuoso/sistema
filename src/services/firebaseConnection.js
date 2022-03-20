import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

let firebaseConfig = {
    apiKey: 'AIzaSyAhn4S-wCDrFPIzfEge1_OfGmQ76BDX7VY',
    authDomain: 'sistema-ae916.firebaseapp.com',
    projectId: 'sistema-ae916',
    storageBucket: 'sistema-ae916.appspot.com',
    messagingSenderId: '963423636920',
    appId: '1:963423636920:web:b44d82f61f8fedfa59d34d',
    measurementId: 'G-6N4CV3BVBK',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase
