function page5() {
  document.getElementById("mainContent").innerHTML = `
        <div id="page5">
            <h1>Cleaning instructions</h1>
            <ul>
            <li><i class="fas fa-circle fa-lg"></i> Clean the kitchen, toilets, shower cabins.</li>
            <li><i class="fas fa-circle fa-lg"></i> Wash the dishes and put them in the kitchen cabinets.</li>
            <li><i class="fas fa-circle fa-lg"></i> Make sure the beds are clean and tidy.</li>
            <li><i class="fas fa-circle fa-lg"></i> Vacuum the sofa and floor everywhere including bathrooms.</li>
            <li><i class="fas fa-circle fa-lg"></i> If the appartment is left uncleaned we may charge up to 1200 kr.</li>
            </ul>
            <button onclick="page4()" type="button" class="btn">BACK</button>
            <button onclick="page10()" type="button" class="btn">PROCEED</button>
        
        </div>
        `;
}
