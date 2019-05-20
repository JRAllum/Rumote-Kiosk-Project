function page3() {
    var db = firebase.firestore().collection('users');
    var input = document.getElementById("bookingNumber").value;
    var docRef = db.doc(input);
    docRef.get().then(function (doc) {

        name = doc.data().name;
        datoFra = doc.data().datoFra;
        datoTil = doc.data().datoTil;
        cleaning = doc.data().cleaning;
        bedLinen = doc.data().bedLinen;

    document.getElementById("mainContent").innerHTML =
        ` <p>` + name + `</p>
    <h1>you have booked the appartment</h1>
    <h1> with 3 bedrooms from</h1>
    <h1> ` + datoFra + ` to ` + datoTil + `</h1> <br><br>
    
    <button onclick="page2()" type="button" class="btn" "">BACK</button>
    <button onclick="cleanOrder()" type="button" class="btn">PROCEED </button>
    `
})

};

function cleanOrder() {
    if (cleaning == true) {
        page10();
    }else page4();
}

