import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBCZ9rW2IcWAH2anVQloJ9_rlBxh-PCDXk",
  authDomain: "goalcoach-47b34.firebaseapp.com",
  databaseURL: "https://goalcoach-47b34.firebaseio.com",
  projectId: "goalcoach-47b34",
  storageBucket: "goalcoach-47b34.appspot.com",
  messagingSenderId: "199011349787"
};

  export const firebaseApp = firebase.initializeApp(config);
