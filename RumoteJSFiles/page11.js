function page11() {
    document.getElementById("mainContent").innerHTML = `
    <h2>Please, confirm your order.</h2>
    <table>
      <tr>
        <td>Four bedroom apartments:</td>
        <td></td>
        <td></td>
        <td>1000kr</td>
      </tr>
      <tr>
        <td>torsdag, 07.03. - fredag, 08.03</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td> I have locked the door</td>
        <td></td>
        <td><input type="checkbox"></td>
      </tr>
      <tr>
        <td> I have put the key in the locker</td>
        <td></td>
        <td><input type="checkbox"></td>
      </tr>
    
    </table>

    <div class="text-center">
      <button onclick="page6()" type="button" class="btn btn-primary bottomright">Proceed</button>
    </div>

  </div>`;
}