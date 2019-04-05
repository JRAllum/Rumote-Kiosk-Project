// Initialize Firebase
var config = {
  apiKey: "AIzaSyBhjSrs-IlCKhbLyC0RlYQRcJJuLhR2yI8",
  authDomain: "rumote-database.firebaseapp.com",
  databaseURL: "https://rumote-database.firebaseio.com",
  projectId: "rumote-database",
  storageBucket: "rumote-database.appspot.com",
  messagingSenderId: "1048806146785"
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
    var cleaning = getInputVal('cleaning');
    var bedLinen = getInputVal('bedlinen');

    //save user
    saveUser(name,bookingnummer,datoFra,datoTil,cleaning,bedLinen);
}

// function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save user to firebase
function saveUser(name,bookingnummer,datoFra,datoTil,cleaning,bedLinen) {
    var newUserRef = userRef.push();
    newUserRef.set({
        name:name,
        bookingnummer:bookingnummer,
        datoFra:datoFra,
        datoTil:datoTil,
        cleaning:cleaning,
        bedLinen:bedLinen
    });
}