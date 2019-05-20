function page5() {
  document.getElementById("mainContent").innerHTML = `
        <div id="page5">
            <h1><i class="fas fa-trash-alt fa-1x"></i>How to clean the appartment?</h1><br>
          <ul>
            <li><i class="fas fa-circle"></i> Clean the kitchen, toilets, shower cabins</li>
            <li><i class="fas fa-circle"></i> Wash the dishes </li>
            <li><i class="fas fa-circle"></i> Throw the litter in the bins outside</li>
            <li><i class="fas fa-circle"></i> Vacuum the  floor </li>
            </ul> <br> <br>
            <h2>If the appartment is left uncleaned <br> we may 
              charge up to 1200 kr</h2>
            <button onclick="page4()" type="button" class="btn">BACK</button>
            <button onclick="page10()" type="button" class="btn">PROCEED</button>
        
        </div>
        `;
}
