import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCswXyihkktXdWl9llv0E3nSZEJV34U1yA',
  authDomain: 'todoist-rindra.firebaseapp.com',
  databaseURL: 'https://todoist-rindra-default-rtdb.firebaseio.com',
  projectId: 'todoist-rindra',
  storageBucket: 'todoist-rindra.appspot.com',
  messagingSenderId: '237289512688',
  appId: '1:237289512688:web:3d03a1f360332e851cac35'
});

export { firebaseConfig as firebase };
