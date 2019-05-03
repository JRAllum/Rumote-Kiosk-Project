function page10() {
  var bedPris;
  var cleanPris;

  if (bedLinen == true) {
    bedPris = 1000;
  } else {
    bedPris = `N/A`;
  };

  if (cleaning == true) {
    cleanPris = 1000;
  } else {
    cleanPris = `N/A`;
  };

  if (cleaning == true && bedLinen == true) {
    total = 1000 + bedPris + cleanPris;
  }
  else if (cleaning == true && bedLinen == false) {
    total = 1000 + cleanPris;
  }
  else if (cleaning == false && bedLinen == true) {
    total = 1000 + bedPris;
  }
  else if (cleaning == false && bedLinen == false) {
    total = 1000;
  }



  document.getElementById("mainContent").innerHTML = `
    <div id="page10"></div>
    <h1>Your order</h1> <br>
<table class="page10">
    <tr>
    <td>3-bedroom apartment</td>
    <td></td>
    <td>1000 kr</td>
  </tr>
  <tr>
    <td>bed linen 3 sets</td>
    <td></td>
    <td>`+ bedPris + ` kr</td>
  </tr>
  <tr>
    <td>cleaning</td>
    <td></td>
    <td>`+ cleanPris + ` kr</td>
  </tr>
  <td>Total:</td>
  <td></td>
   <td>`+ total + ` kr</td>
  </tr>
  </table>
    

      <button onclick="page4()" type="button" class="btn">BACK</button>
      <button onclick="page6()" type="button" class="btn">PROCEED</button>
    `;
}