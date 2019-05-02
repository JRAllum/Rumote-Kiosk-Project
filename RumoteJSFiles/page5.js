function page5() {
  document.getElementById("mainContent").innerHTML = `
        <div id="page5">
            <h1><i class="fas fa-trash-alt fa-1x"></i> What to do?</h1>
          <ul>
            <li><i class="fas fa-circle"></i> Clean the kitchen, toilets, shower cabins</li>
            <li><i class="fas fa-circle"></i> Wash the dishes </li>
            <li><i class="fas fa-circle"></i> Throw the litter </li>
            <li><i class="fas fa-circle"></i> Vacuum the  floor </li>
            </ul>
            <p style="font-size: 100%">If the appartment is left uncleaned <br> we may 
              charge up to 1200 kr</p>
            <button onclick="page4()" type="button" class="btn">BACK</button>
            <button onclick="page10()" type="button" class="btn">PROCEED</button>
        
        </div>
        `;
}
