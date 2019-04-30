// Initialize Firebase
var config = {
    apiKey: "AIzaSyB10cidgp03S-uRO_Fg7Qm-CARjYUaxYLo",
    authDomain: "rumote-database-7490b.firebaseapp.com",
    databaseURL: "https://rumote-database-7490b.firebaseio.com",
    projectId: "rumote-database-7490b",
    storageBucket: "",
    messagingSenderId: "209243377839"
};
firebase.initializeApp(config);

// var name;
// var datoFra;
// var datoTil;
// var cleaning;
// var bedLinen;

// function connect() {
//     var db = firebase.firestore().collection('users');
//     var input = document.getElementById("bookingNumber").value;
//     var docRef = db.doc(input);
//     docRef.get().then(function (doc) {
//         console.log(doc.data().name,doc.data().datoFra,doc.data().datoTil)

//         name = doc.data().name;
//         datoFra = doc.data().datoFra;
//         datoTil = doc.data().datoTil;
//         cleaning = doc.data().cleaning;
//         bedLinen = doc.data().bedLinen;
//     })
// };