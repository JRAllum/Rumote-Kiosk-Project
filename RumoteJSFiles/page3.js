function page3(){
    var message;
    var guest = document.getElementById("bookingNumber").value;

    switch(guest) {
        case "1234567":
         message = "John Smith, you have booked the appartment with 3 bedrooms  to., 4.03 - fr., 6.03. ";
         break;
        case "7654321":
        message = "John Smith, you have booked the appartment with 3 bedrooms  mo., 6.06 - fr., 10.07. ";
        break;
        case "0000000":
        message = "John Smith, you have booked the appartment with 3 bedrooms to., 15.08 - fr., 18.08.";
        break;
        default:
        message = "Oops, it looks like something went wrong. Please, check your booking number.";
    }
    document.getElementById("mainContent").innerHTML =
    
    ` <div>${message}</div>
    
    <button onclick="page2()" type="button" class="btn btn-primary btn-lg  bottomleft">Back</button>
    <button onclick="page4()" type="button" class="btn btn-primary btn-lg  bottomright">Proceed </button>
 

    `
}