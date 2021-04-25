import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyDyG71RP4A6c7pdSRv8SOlQaukypu4Lqkg",
  authDomain: "fir-todo-b9595.firebaseapp.com",
  databaseURL: "https://fir-todo-b9595-default-rtdb.firebaseio.com",
  projectId: "fir-todo-b9595",
  storageBucket: "fir-todo-b9595.appspot.com",
  messagingSenderId: "551372161687",
  appId: "1:551372161687:web:b67e8806a8b2c7c4529fd2",
  measurementId: "G-D48GKC05TH"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const analytics = firebase.analytics();

export { database, analytics };