const firebase = require('firebase')
    var firebaseConfig = {
        apiKey: "AIzaSyAgsay3UwkZ2sgXKvIWYJeH8cYux5kbxkU",
        authDomain: "ecommerce-f9321.firebaseapp.com",
        databaseURL: "https://ecommerce-f9321.firebaseio.com",
        projectId: "ecommerce-f9321",
        storageBucket: "ecommerce-f9321.appspot.com",
        messagingSenderId: "965835575668",
        appId: "1:965835575668:web:040550082340b38c319c21",
        measurementId: "G-3BPVYPXM09"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
module.exports = firebase
