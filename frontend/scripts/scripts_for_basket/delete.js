function delet(i){
let arrBasket, name, img, price, priceFirst, btnCheck, counts;

  let res = localStorage.getItem('arrBasket');
  arrBasket = JSON.parse(res);


  name = arrBasket.name.splice(i, 1);
  img = arrBasket.img.splice(i, 1);
  price = arrBasket.price.splice(i, 1);
  priceFirst = arrBasket.priceFirst.splice(i, 1);
  btnCheck = arrBasket.btnCheck.splice(i, 1);
  counts = arrBasket.counts.splice(i, 1);

  arrBasket = {
    name: arrBasket.name,
    price: arrBasket.price,
    priceFirst: arrBasket.priceFirst,
    img: arrBasket.img,
    btnCheck: arrBasket.btnCheck,
    counts: arrBasket.counts
  }

  localStorage.setItem('arrBasket', JSON.stringify(arrBasket));
  document.getElementById(`sect${i}`).classList.add('hide');
  sumOrder();
  countBasket();
  if(Number(localStorage.counter) === 0){
    document.getElementById("openWindow").classList.add("disable");
    document.getElementById("openWindow").classList.add("colorBnt");
    checkBasket();
  }
}
