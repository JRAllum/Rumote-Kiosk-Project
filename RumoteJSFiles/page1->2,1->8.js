function page1() {

    document.getElementById('mainContent').innerHTML =
    `
    <h2> Welcome to Alpin Lodge</h2> <br>
    <button onclick= "page2()"  type="button" class="btn btn-primary btn-lg buttonCheckInOutSize"> Check in </button>
    <button onclick= "page8()"   type="button" class="btn btn-primary btn-lg buttonCheckInOutSize">Check out </button>
    `
}

function page2(){
    document.getElementById('mainContent').innerHTML=
    `
    <h1> Your booking number</h1> <br>

    <input id="bookingNumber" type="tel" class="form-control-lg">
        <button onclick="fetchFakeGuest()" class="btn btn-primary btn-lg buttonCheckInOutSize">Submit</button>
    
    `
}

function page8(){
    document.getElementById('mainContent').innerHTML =
    `
    <h2>Please, check if everything is in order.</h2> <br>

<ul>
<li> I have cleaned the apartment</li>
<li>I have locked the door</li>
<li>I have put the key in the locker</li>

</ul>
    `
}