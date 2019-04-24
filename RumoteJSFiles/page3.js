function page3(){
    var message;
    var guest = document.getElementById("bookingNumber").value;

    switch(guest) {
        case "1234567":
         message1 = "John Smith,";
         message2 ="you have booked the appartment with 3 bedrooms  to., 4.03 - fr., 6.03."
         break;
        case "7654321":
        message1 = "Ole Norman,  ";
        message2 ="you have booked the appartment with 3 bedrooms  mo., 6.06 - fr., 10.07."
        break;
        case "0000000":
        message1 = "Elin Martinson, .";
        message2 = "you have booked the appartment with 3 bedrooms to., 15.08 - fr., 18.08"
        break;
        default:
        message1 = "We can't find you.";
        message2= "Please, check your booking number";
    }
    document.getElementById("mainContent").innerHTML =
    
    ` <p>${message1}</p>
    <h2>${message2}</h2> <br><br>
    
    <button onclick="page2()" type="button" class="btn" "">BACK</button>
    <button onclick="page4()" type="button" class="btn">PROCEED </button>

    `
}