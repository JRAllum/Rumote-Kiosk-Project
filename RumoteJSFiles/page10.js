function page10() {
  document.getElementById("mainContent").innerHTML = `
    <div id="page10"></div>
    <h1>Your order</h1> <br>
<table class="page10">
    <tr>
    <td>4-bedroom apartment</td>
    <td></td>
    <td>1000 kr</td>
  </tr>
  <tr>
    <td>bed linen 4 sets</td>
    <td></td>
    <td>1000 kr</td>
  </tr>
  <tr>
    <td>cleaning</td>
    <td></td>
    <td>1000 kr</td>
  </tr>
  <td>Total:</td>
  <td></td>
   <td>3000 kr</td>
  </tr>
  </table>
    

      <button onclick="page4()" type="button" class="btn">BACK</button>
      <button onclick="page6()" type="button" class="btn">PROCEED</button>
    `;
}