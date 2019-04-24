function page5() {
  document.getElementById("mainContent").innerHTML = `
        <div id="page5">
            <h1>Cleaning instructions</h1>
          <ul>
            <li><i class="fas fa-circle fa-lg"></i> clean the kitchen, toilets, shower cabins</li>
            <li><i class="fas fa-circle fa-lg"></i> wash the dishes and put them in the kitchen cabinets</li>
            <li><i class="fas fa-circle fa-lg"></i> make sure the beds are clean and tidy</li>
            <li><i class="fas fa-circle fa-lg"></i> vacuum the sofa and floor everywhere</li>
            <li><i class="fas fa-circle fa-lg"></i> if the appartment is left uncleaned we may <br>
             &nbsp; charge up to 1200 kr
            </ul>
            <button onclick="page4()" type="button" class="btn">BACK</button>
            <button onclick="page10()" type="button" class="btn">PROCEED</button>
        
        </div>
        `;
}
