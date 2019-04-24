function page8() {
	document.getElementById('mainContent').innerHTML = `
               

  <span onmouseover="starmark(this)" onclick="starmark(this)" id="1one" style="font-size:40px;cursor:pointer;"
    class="fa fa-star checked"></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="2one" style="font-size:40px;cursor:pointer;"
    class="fa fa-star "></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="3one" style="font-size:40px;cursor:pointer;"
    class="fa fa-star "></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="4one" style="font-size:40px;cursor:pointer;"
    class="fa fa-star"></span>
  <span onmouseover="starmark(this)" onclick="starmark(this)" id="5one" style="font-size:40px;cursor:pointer;"
    class="fa fa-star"></span>
  <br />
  <textarea style="margin-top:5px;" class="form-control" rows="3" id="comment"
    placeholder="Enter your review"></textarea>

  <button onclick="page9()" type="button" style="margin-top:10px;margin-left:5px;"
    class="btn btn-lg btn-success">Submit</button>
  
            
            `;
}
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
// Alert popup with rating score
	function result() {
	alert('Rating : ' + count + '\nReview : ' + document.getElementById('comment').value);
	}

