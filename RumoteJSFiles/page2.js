function page2() {
    document.getElementById('mainContent').innerHTML = `
    <h2> Your booking number</h2> <br>

    <input id="bookingNumber" type="tel" class="form-control-lg">
    <button onclick="page3()" class="btn btn-primary btn-lg buttonCheckInOutSize">Submit</button>
    
    `;
}