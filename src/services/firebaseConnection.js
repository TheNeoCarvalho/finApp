import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCsVx8n4nnXD3goqNrFeVEyX67Ee5zaOpA',
  authDomain: 'finapp-d04fe.firebaseapp.com',
  projectId: 'finapp-d04fe',
  storageBucket: 'finapp-d04fe.appspot.com',
  messagingSenderId: '713338476935',
  appId: '1:713338476935:web:941fa76c267446eb4adb22',
  measurementId: 'G-FPCWSCRZE5',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
