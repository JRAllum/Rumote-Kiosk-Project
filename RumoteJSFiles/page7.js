function page7() {
  document.getElementById("mainContent").innerHTML = `
              <div id="page7"></div>
              <p>Almost done!</p>
                <h2> We have sent the code to the locker via text.</h2> 
                <h1>+ 47 67236739</h1>

                <h2>Shall we send the code to  some other number?</h2>
                <div>
            <input type="text" id="bookingNumber" class="inputForm" placeholder = some_other_number>
              <button onclick="page3()" class="submitBtn small" >OK</button><br>
              </div>
                <button onclick="page12()" type="button" class="btn">PROCEED</button>

          </div>
          `;
}
