function infoForOrder(sum, count, i) {
  let arrBasket;

  document.getElementById(`ord${i}`).innerHTML = sum;
  document.getElementById(`count${i}`).innerHTML = count;
  const res = localStorage.getItem('arrBasket');
  arrBasket = JSON.parse(res);
  const { name } = arrBasket;
  const { img } = arrBasket;
  const { price } = arrBasket;
  const { priceFirst } = arrBasket;
  const { btnCheck } = arrBasket;
  const { counts } = arrBasket;

  counts[i] = count;
  price[i] = sum;

  arrBasket = {
    name,
    price,
    priceFirst,
    img,
    btnCheck,
    counts,
  };

  localStorage.setItem('arrBasket', JSON.stringify(arrBasket));
}
