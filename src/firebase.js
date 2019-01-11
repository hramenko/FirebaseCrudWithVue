import {initializeApp} from 'firebase';

const app = initializeApp({ // Initialize Firebase
    
      apiKey: "AIzaSyBaaR3NfTRH8Nn_lBU2g9FD586YPDfzqdg",
      authDomain: "convertimagetopdf-94d3a.firebaseapp.com",
      databaseURL: "https://convertimagetopdf-94d3a.firebaseio.com",
      projectId: "convertimagetopdf-94d3a",
      storageBucket: "convertimagetopdf-94d3a.appspot.com",
      messagingSenderId: "688742065326"
});

export const db = app.database();

export const namesRef = db.ref('names');
