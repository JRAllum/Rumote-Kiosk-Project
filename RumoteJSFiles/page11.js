function page11() {
    document.getElementById('mainContent').innerHTML = `
    
    
    <h2>Please, check if everything is in order.</h2> <br>
    
    <table style="width:100%">
    <tr>
        <td>I have cleaned the apartment</td>
        <td></td>
        <td><input type="checkbox"></td>
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
    <button type="button" class="btn btn-primary btn-lg buttonCheckInOutSize bottomright">Proceed </button>
    `;
}