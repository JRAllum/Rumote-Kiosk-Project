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

// Reference user collection
var db = firebase.database().ref('users');


function connect() {
    var booknbr = input;
    return firebase.database().ref('/users/' + booknbr).once('value').then(function(snapshot){
        var name = (snapshot.val() && snapshot.val().name),
        var datoFra = (snapshot.val() && snapshot.val().datoFra),
        var datoTil = (snapshot.val() && snapshot.val().datoTil),
        var cleaning = (snapshot.val() && snapshot.val().cleaning),
        var bedlinen = (snapshot.val() && snapshot.val().bedlinen),
    });
};
    
