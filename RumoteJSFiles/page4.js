function page4() {
    document.getElementById("mainContent").innerHTML = 
    `<div id="page4">
   
    <p class="important"> Important! </p>  
    <h1> Our guests need to clean after themselves<br>
     or ORDER cleaning <br> 
     so that professionals can do it for them<br> 
        
        <h2>Cleaning costs 1000 kr.</h1> 
    
        <button onclick="page5(unOrderClean())" type="button" class="btn bg" >I WILL CLEAN MYSELF</button>
        <button onclick="page10(orderClean())" type="button" class="btn bg">ORDER CLEANING</button>
</div>`
}