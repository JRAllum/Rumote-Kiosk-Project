function page8() {
	document.getElementById('mainContent').innerHTML = `
      <div id="page8">         
<p id="message"> How was your stay? </p> <br>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="1one" style="font-size:60px;cursor:pointer;"
    class="fa fa-star checked"></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="2one" style="font-size:60px;cursor:pointer;"
    class="fa fa-star "></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="3one" style="font-size:60px;cursor:pointer;"
    class="fa fa-star "></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="4one" style="font-size:60px;cursor:pointer;"
    class="fa fa-star"></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="5one" style="font-size:60px;cursor:pointer;"
    class="fa fa-star"></span><br><br>

  
  <button onclick="thanks()" id="rating" type="submit" class="submitBtn" >submit</button><br>
  <h1 id="rateNum"></h1>
  <button onclick="page11()" type="button" class="btn ">BACK</button>
  <button onclick="page9()" type="button" class="btn">PROCEED</button>
      </div>    
            `;}

// Function for starrating
	  var count;
	  function starmark(item) {
		count = item.id[0];
    sessionStorage.starRating = count;
    
		var subid = item.id.substring(1);
		for (var i = 0; i < 5; i++) {
			if (i < count) {
				document.getElementById(i + 1 + subid).style.color = 'orange';
			} else {
				document.getElementById(i + 1 + subid).style.color = 'black';
			}
		}
	}
// Change heading to THANK YOU
 function thanks(){
   document.getElementById("message").innerText= "Thank you for your feedback!"
 }
 //.........Fire base......
const db = firebase.firestore();

const ratingNum = document.querySelector('#rate-num');

db.collection('stars').get().then((snapshot)=>{
  snapshot.docs.forEach(doc=>{
    console.log(doc.data())
  })
  
})



