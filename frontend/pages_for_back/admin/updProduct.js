function updProduct(){
    let art = document.getElementById("articul");
    let name = document.getElementById("name");
    let descript = document.getElementById("descript");
    let price = document.getElementById("price");
    let img = document.getElementById("img");
    var select = document.querySelector('select');
    select.addEventListener('change', () => {
    });
    let type = select.value;
    let cal = document.getElementById("cal");
    let uglev = document.getElementById("uglev");
    let belok = document.getElementById("belok");
    let zhir = document.getElementById("zhir");
    if (!art.checkValidity() || !name.checkValidity() || !descript.checkValidity() || !price.checkValidity() || !img.checkValidity() || !cal.checkValidity() || !uglev.checkValidity() || !belok.checkValidity() || !zhir.checkValidity()) {
        console.log("error");
    } else {
      UpdateOne(sessionStorage.art, art.value, name.value, descript.value, price.value, img.value, type, cal.value, uglev.value, belok.value, zhir.value)
      document.getElementById("product").classList.add('hide');
      document.getElementById("okUpd").classList.remove('hide');
    }
}
