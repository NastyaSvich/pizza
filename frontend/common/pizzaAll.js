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
  let name = result[i].name;
  let price = result[i].price;
  let description = result[i].description;
  if (result[i]!==undefined) str +=
  `<div class="col-lg-3 col-md-4  col-sm-6 card tranform-for-card">
       <div class="center-text mb-30">
           <div class="img-200x mlr-auto pos-relative click"><img data-articul = ${articul} class = "imgForClick" src="images/seller-2-200x200.png" alt="${name}"></div>
           <h5 class="mt-20 lengthWords">${name}</h5>
           <h4 class="mt-5 lengthWords"><b>${price} <span class = "large">руб.</span></b></h4>
           <p data-articul = ${articul} class = "descr lengthWords padding-top-15">${description}</p>
           <h6 class="mt-20"><a href="#" class="btn-brdr-primary plr-25"><b>В корзину</b></a></h6>
       </div>
    </div>`;
  }
  out_arr.innerHTML = str;
}
else {
  check();
}
}
