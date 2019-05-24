function page2() {
    document.getElementById('mainContent').innerHTML = `
    <div id="page2"><p> Your booking number </p> <br><br>
<div>
    <input type="text" id="bookingNumber" class="inputForm" placeholder="0 0 0 0 0" >
    <button onclick="page3()" class="submitBtn" >submit</button><br>
    <button onclick="page1()" type="button" class="btn" "">BACK</button>
</div>
</div>
    `;
    
}