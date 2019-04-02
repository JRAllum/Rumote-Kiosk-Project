function page1() {
	document.getElementById('mainContent').innerHTML = `
    <h2> Welcome to Alpin Lodge</h2> <br>
    <button onclick= "page2()"  type="button" class="btn btn-primary btn-lg buttonCheckInOutSize"> Check in </button>
    <button onclick= "page8()"   type="button" class="btn btn-primary btn-lg buttonCheckInOutSize">Check out </button>
    `;
}

function page2() {
	document.getElementById('mainContent').innerHTML = `
    <h2> Your booking number</h2> <br>

    <input id="bookingNumber" type="tel" class="form-control-lg">
    <button onclick="fetchFakeGuest()" class="btn btn-primary btn-lg buttonCheckInOutSize">Submit</button>
    
    `;
}

function page8() {
document.getElementById('mainContent').innerHTML = `


<h2>Please, check if everything is in order.</h2> <br>

<table style="width:100%">
<tr>
    <td>I have cleaned the apartment</td>
    <td></td>
    <td><input type="checkbox"></td>
  </tr>
  <tr>
    <td> I have locked the door</td>
    <td></td>
    <td><input type="checkbox"></td>
  </tr>
  <tr>
    <td> I have put the key in the locker</td>
    <td></td>
    <td><input type="checkbox"></td>
  </tr>

</table>
<button type="button" class="btn btn-primary btn-lg buttonCheckInOutSize bottomright">Proceed </button>
`;
}
