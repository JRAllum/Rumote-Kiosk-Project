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
var userRef = firebase.database().ref('users');

// Listen for form submit
document.getElementById('userForm').addEventListener('submit', submitForm);

//submit form
function submitForm(event) {
    event.preventDefault();

    //Get values
    var name = getInputVal('name');
    var bookingnummer = getInputVal('bookingnummer');
    var datoFra = getInputVal('fra');
    var datoTil = getInputVal('til');

    var cleaning = document.getElementById('cleaning');
    var bedLinen = document.getElementById('bedlinen');

    if (cleaning.checked == true) {
        var cleaning = true;
    }
    else {
        var cleaning = false;
    }

    if (bedLinen.checked == true) {
        var bedLinen = true;
    }
    else {
        var bedLinen = false;
    }

    //save user
    saveUser(name, bookingnummer, datoFra, datoTil, cleaning, bedLinen);

    // Clear form
    document.getElementById('userForm').reset();
}

// function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save user to firebase
function saveUser(name, bookingnummer, datoFra, datoTil, cleaning, bedLinen) {
    var newUserRef = userRef.push();
    newUserRef.set({
        name: name,
        bookingnummer: bookingnummer,
        datoFra: datoFra,
        datoTil: datoTil,
        cleaning: cleaning,
        bedLinen: bedLinen
    });
}