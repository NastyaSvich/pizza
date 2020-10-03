function delet(i) {
  let arrBasket;

  const res = localStorage.getItem('arrBasket');
  arrBasket = JSON.parse(res);

  const name = arrBasket.name.splice(i, 1);
  const img = arrBasket.img.splice(i, 1);
  const price = arrBasket.price.splice(i, 1);
  const priceFirst = arrBasket.priceFirst.splice(i, 1);
  const btnCheck = arrBasket.btnCheck.splice(i, 1);
  const counts = arrBasket.counts.splice(i, 1);

  arrBasket = {
    name: arrBasket.name,
    price: arrBasket.price,
    priceFirst: arrBasket.priceFirst,
    img: arrBasket.img,
    btnCheck: arrBasket.btnCheck,
    counts: arrBasket.counts,
  };

  localStorage.setItem('arrBasket', JSON.stringify(arrBasket));
  document.getElementById(`sect${i}`).classList.add('hide');
  sumOrder();
  countBasket();
  if (Number(localStorage.counter) === 0) {
    document.getElementById('openWindow').classList.add('disable');
    document.getElementById('openWindow').classList.add('colorBnt');
    checkBasket();
  }
}
