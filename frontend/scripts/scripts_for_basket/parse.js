function parse() {
  let type;
  const res = localStorage.getItem('arrBasket');
  const countBasket = JSON.parse(res);
  const namePizza = countBasket.name;
  const { counts } = countBasket;
  const { price } = countBasket;
  const articul = countBasket.btnCheck.join() + Math.random();
  const priceAll = document.getElementById('sumOrder').textContent;
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const tel = document.getElementById('tel').value;
  const inp = document.getElementsByName('radio');
  for (let i = 0; i < inp.length; i += 1) {
    if (inp[i].type === 'radio' && inp[i].checked) {
      type = inp[i].value;
    }
  }
  AddOneOrder(articul, name, surname, tel, type, priceAll, price, namePizza, counts);
  localStorage.clear();
  document.getElementById('orderForm').classList.add('hide');
  document.getElementById('ok').classList.remove('hide');
}
