function page8() {
  document.getElementById('mainContent').innerHTML = `
      <div id="page8">         
<p id="message"> How was your stay? </p><h1 id="rateNum"></h1> <br>
<div id="starsBundle">
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="1" style="font-size:60px;cursor:pointer;"
    class="fa fa-star checked"></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="2" style="font-size:60px;cursor:pointer;"
    class="fa fa-star "></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="3" style="font-size:60px;cursor:pointer;"
    class="fa fa-star "></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="4" style="font-size:60px;cursor:pointer;"
    class="fa fa-star"></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)"  id="5" style="font-size:60px;cursor:pointer;"
    class="fa fa-star"></span> <br><br>
  <button onclick="thanks()" id="rating" type="submit" class="submitBtn" >submit</button><br>
  </div>

  <button onclick="page11()" type="button" class="btn ">BACK</button>
  <button onclick="page9()" type="button" class="btn">PROCEED</button>

      </div>   `;
}

var currentRating = 0;

// Function for starrating

function starmark(item) {
  var count = item.id[0];
  sessionStorage.starRating = count;

  var subid = item.id.substring(1);
  for (var i = 0; i < 5; i++) {
    if (i < count) {
      document.getElementById(i + 1 + subid).style.color = 'orange';
    } else {
      document.getElementById(i + 1 + subid).style.color = 'black';
    };
  }
  document.getElementById('rateNum').innerText = `You have chosen ${count} stars`;
  
  currentRating = count;
}

//.........Fire base......
const db = firebase.firestore();

// Change heading to THANK YOU
function thanks() {
  db.collection('stars').add({
    rating: currentRating
  })

  document.getElementById("message").innerText = "Thank you for your feedback!"
}


db.collection('stars').get().then((snapshot)=>{
  var ratings = snapshot.docs
    .map(x => x.data())
    .filter(x => x.rating != undefined)
    .map(x => parseInt(x.rating));

  var sum = 0
  ratings.forEach(r => {
    sum += r
  });

  var average = ratings.length == 0 ? 0 : sum / ratings.length;

  console.log(average)
});




