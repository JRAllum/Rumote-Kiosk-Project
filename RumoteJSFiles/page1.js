function page1() {
	document.getElementById('mainContent').innerHTML = `
    
    <div id="page1">
    <p> Welcome to Alpin Lodge </p><br><br>
    <i class="fas fa-home fa-4x important"></i> <br>
     <br>
    <div>
    <button onclick= "page11()"   type="button" class="btn" > CHECK OUT </button>
    <button onclick= "page2()"  type="button" class="btn"> CHECK IN </button>
    </div>
    </div>`;
}