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
    <h2>you have booked the appartment with 3 bedrooms from ` + datoFra + ` to ` + datoTil + `</h2> <br><br>
    
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

