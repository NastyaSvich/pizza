function parse(){
  let namePizza, counts, price, priceAll, name, surname, tel, type, articul;
  const res = localStorage.getItem('arrBasket');
  const countBasket = JSON.parse(res);
  namePizza = countBasket.name;
  counts = countBasket.counts;
  price = countBasket.price;
  articul = countBasket.btnCheck.join() + Math.random();
  priceAll = document.getElementById("sumOrder").textContent;
  name = document.getElementById("name").value;
  surname = document.getElementById("surname").value;
  tel = document.getElementById("tel").value;
  let inp = document.getElementsByName('radio');
  for (let i = 0; i < inp.length; i++) {
      if (inp[i].type == "radio" && inp[i].checked) {
          type = inp[i].value;
      }
  }
    AddOneOrder(articul,name,surname,tel,type,priceAll,price,namePizza,counts)
    localStorage.clear();
    document.getElementById("orderForm").classList.add('hide');
    document.getElementById("ok").classList.remove('hide');
}
