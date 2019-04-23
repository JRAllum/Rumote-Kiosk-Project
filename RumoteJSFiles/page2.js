function page2() {
    document.getElementById('mainContent').innerHTML = `
    <h1> Your booking number </h1> <br><br>
<div>
    <input type="text" id="bookingNumber" class="inputForm"/>
    <button onclick="page3()" class="submitBtn" >OK</button><br>
</div>
    `;
}