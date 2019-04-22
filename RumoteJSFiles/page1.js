function page1() {
	document.getElementById('mainContent').innerHTML = `
    <h2> Welcome to Alpin Lodge</h2> <br><br><br>
    <div>
    <button onclick= "page2()"  type="button" class="btn btn-primary btn-lg buttonCheckInOutSize btns "> Check in </button>
    <button onclick= "page11()"   type="button" class="btn btn-primary btn-lg  buttonCheckInOutSize btns" > Check out </button>
    </div>`;
}