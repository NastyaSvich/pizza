function infoForOrder(sum, count, i){
  let arrBasket, name, img, price, priceFirst, btnCheck, counts;

  document.getElementById(`ord${i}`).innerHTML = sum;
  document.getElementById(`count${i}`).innerHTML = count;
  let res = localStorage.getItem('arrBasket');
  arrBasket = JSON.parse(res);
  name = arrBasket.name;
  img = arrBasket.img;
  price = arrBasket.price;
  priceFirst = arrBasket.priceFirst;
  btnCheck = arrBasket.btnCheck;
  counts = arrBasket.counts;

  counts[i] = count;
  price[i] = sum;

  arrBasket = {
    name: name,
    price: price,
    priceFirst: priceFirst,
    img: img,
    btnCheck: btnCheck,
    counts: counts
  }

  localStorage.setItem('arrBasket', JSON.stringify(arrBasket));
}
