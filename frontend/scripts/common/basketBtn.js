let arrBasket, name, img, price, btnCheck;

function basketBtn(event) {
  const click = event.target;
  if (click.classList.contains('basketBtn')) {
  let idPizza = document.getElementById(`${click.dataset.id}`);
  if (localStorage.arrBasket === undefined){
    arrBasket = {};
    name = [];
    img = [];
    price = [];
    btnCheck = [];
  }
  else{
    let res = localStorage.getItem('arrBasket');
    arrBasket = JSON.parse(res);
    name = arrBasket.name;
    img = arrBasket.img;
    price = arrBasket.price;
    btnCheck = arrBasket.btnCheck;
  }

    img.push(idPizza.querySelector('.imgForClick').src);
    name.push(idPizza.querySelector('.imgForClick').alt);
    price.push(Number(idPizza.querySelector('.lengthWords b').textContent));
    btnCheck.push(click.dataset.id);

    arrBasket = {
      name: name,
      price: price,
      img: img,
      btnCheck: btnCheck
    }

    localStorage.setItem('arrBasket', JSON.stringify(arrBasket));

    click.classList.add('colorBnt');
    click.innerHTML = 'Добавлено';
    idPizza.querySelector('h6 a').classList.add('colorBnt');
    idPizza.querySelector('h6 a').innerHTML = 'Добавлено';
    document.querySelectorAll(`#${click.dataset.id}`).forEach(el => el.classList.add('disable'));
  }
  countBasket();
};
