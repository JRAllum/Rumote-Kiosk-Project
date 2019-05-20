function page7() {
  document.getElementById("mainContent").innerHTML = `
              <div id="page7"></div>
              <p> Success! </p>
                
              <h2>Type here your TELEPHONE NUMBER to receive the CODE from us.</h2> <br>
              <div>
            <input type="text" id="bookingNumber" class="inputForm" placeholder="+0000000000" >
              <button onclick="page3()" class="submitBtn" >OK</button>
              </div>
              <button onclick="page6()" type="button" class="btn ">BACK</button>
              <button onclick="page12()" type="button" class="btn">PROCEED</button>

          </div>
          `;
}
