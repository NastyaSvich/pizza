function updProduct() {
  const art = document.getElementById('articul');
  const name = document.getElementById('name');
  const descript = document.getElementById('descript');
  const price = document.getElementById('price');
  const img = document.getElementById('img');
  const select = document.querySelector('select');
  select.addEventListener('change', () => {
  });
  const type = select.value;
  const cal = document.getElementById('cal');
  const uglev = document.getElementById('uglev');
  const belok = document.getElementById('belok');
  const zhir = document.getElementById('zhir');
  if (!art.checkValidity() || !name.checkValidity() || !descript.checkValidity() || !price.checkValidity() || !img.checkValidity() || !cal.checkValidity() || !uglev.checkValidity() || !belok.checkValidity() || !zhir.checkValidity()) {
    console.log('error');
  } else {
    UpdateOne(sessionStorage.art, art.value, name.value, descript.value, price.value, img.value, type, cal.value, uglev.value, belok.value, zhir.value);
    document.getElementById('product').classList.add('hide');
    document.getElementById('okUpd').classList.remove('hide');
  }
}
