function pizzaAll(result){
  let out_arr = document.getElementById('menu');
  let str = ' ';
  let count;
  if (result.length > 0){
  if (result.length < 8){
    count = result.length;
  }
  else{
    count = 8;
  }
  for (let i = 0; i < count; i++) {
  let articul = result[i].articul;
  let reslt = localStorage.getItem('arrBasket');
  let countBasket = JSON.parse(reslt);
  let style = '<h6 class="mt-20"><a class="btn-brdr-primary plr-25 basketBtn bold" data-id = ' + articul +'>В корзину</a></h6>';
  let clas = 'col-lg-3 col-md-4 col-sm-6 card tranform-for-card';
  let name = result[i].name;
  let price = result[i].price;
  let description = result[i].description;
  if(countBasket !== null){
  for (let j = 0; j < countBasket.btnCheck.length; j++){
    if (articul === countBasket.btnCheck[j]){
      clas = 'col-lg-3 col-md-4  col-sm-6 card tranform-for-card disable';
      style = '<h6 class="mt-20"><a class="btn-brdr-primary plr-25 basketBtn bold colorBnt" data-id = ' + articul +'>Добавлено</a></h6>';
    }
}
}
  if (result[i]!==undefined) str +=
  `<div class='${clas}' id = ${articul}>
       <div class="center-text mb-30">
           <div class="img-200x mlr-auto pos-relative click"><img data-articul = ${articul} class = "imgForClick" src="images/seller-2-200x200.png" alt="${name}"></div>
           <h5 class="mt-20 lengthWords">${name}</h5>
           <h4 class="mt-5 lengthWords"><b>${price}</b> <span class = "large">руб.</span></h4>
           <p data-articul = ${articul} class = "descr lengthWords padding-top-15">${description}</p>
           ${style}
       </div>
    </div>`;
  }
  out_arr.innerHTML = str;
}
else {check();}
}
