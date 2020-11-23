function sumOrder() {
  const reslt = localStorage.getItem('arrBasket');
  const countBasket = JSON.parse(reslt);
  let allSum = 0;
  for (let m = 0; m < countBasket.name.length; m += 1) {
    const sum = Number(countBasket.price[m]);
    allSum += sum;
  }
  document.getElementById('sumOrder').innerHTML = allSum;
}

function minusCount(priceOrd, i) {
  let sum = Number(document.getElementById(`ord${i}`).innerHTML);
  let count = Number(document.getElementById(`count${i}`).innerHTML);
  if (count > 1) {
    sum -= priceOrd;
    count -= 1;
    infoForOrder(sum, count, i);
  }
  sumOrder();
}

function plusCount(priceOrd, i) {
  let sum = Number(document.getElementById(`ord${i}`).innerHTML);
  let count = Number(document.getElementById(`count${i}`).innerHTML);
  sum += priceOrd;
  count += 1;
  infoForOrder(sum, count, i);
  sumOrder();
}
