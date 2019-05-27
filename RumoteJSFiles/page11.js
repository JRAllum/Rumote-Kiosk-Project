function page11() {
    document.getElementById("mainContent").innerHTML = `
    <div id="page11">
    <p>Make sure that you:</p> 
    <ul>
    <div class="checkbox">
    <ul class="nobull">
      <li>
          <input type="checkbox" id="checkbox_1" onclick="checkBeforeProceed()">
          <label for="checkbox_1"> cleaned the appartment <i class="fas fa-dumpster  fa-1x"></i></label>
      </li>

      <li>
          <input type="checkbox" id="checkbox_2" onclick="checkBeforeProceed()">
          <label for="checkbox_2">  locked the door  <i class="fas fa-key fa-1x "></i> <i class="fas fa-door-closed fa-1x "></i></label>
      </li>
        
      <li>
          <input type="checkbox" id="checkbox_3" onclick="checkBeforeProceed()">
          <label for="checkbox_3"> put the key in the locker <i class="fas fa-key fa-1x "></i></label>
      </li>
      </ul>
     </div>
    <div>
    
    <button onclick="page1()" type="button" class="btn" "">BACK</button>
    <button onclick="page8()" type="button" id="proceed" class="btn" style="display: none"> PROCEED </button>
    </div>

    
    </div>
  `;
}

function checkBeforeProceed() {
  var checkBox1 = document.getElementById("checkbox_1");
  var checkBox2 = document.getElementById("checkbox_2");
  var checkBox3 = document.getElementById("checkbox_3");
  var btn = document.getElementById("proceed");
  if (checkBox1.checked == true&&checkBox2.checked == true&&checkBox3.checked == true){
    btn.style.display = "inline";
  } else {
     btn.style.display = "none";
  }    
}