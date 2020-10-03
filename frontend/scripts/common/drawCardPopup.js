function drawCardPopup(result) {
  const outArr1 = document.getElementById('consequence');
  let str1 = ' ';
  for (let i = 0; i < 1; i += 1) {
    const { articul } = result[i];
    const { name } = result[i];
    const { price } = result[i];
    const { description } = result[i];
    const { cal } = result[i];
    const { uglev } = result[i];
    const { belok } = result[i];
    const { zhir } = result[i];
    const { img } = result[i];

    if (result[i] !== undefined) {
      str1
+= ` <div>
     <div class="center-text" id = ${articul}>
     <div class="colum1">
         <div class="mlr-auto img-150x pos-relative"><img class = "imgHeight150" src=${img} alt="${name}"></div>
         <h3 class="center-text mt-20 lengthWords">${name}</h3>
         <h4 class="center-text mt-5 lengthWords"><b>${price}</b> <span class = "large">руб.</span></h4>
     </div>
     <div class="colum2">
         <h5><b>Пищевая ценность продукта:</b></h5>
         <p class = "black padding-top-15">Калории ${cal} ккал</p>
         <p class = "black padding-top-15">Углеводы ${uglev} гр.</p>
         <p class = "black padding-top-15">Белки ${belok} гр.</p>
         <p class = "black padding-top-15">Жиры ${zhir} гр.</p>
     </div>
     <div class="foot">
         <p class = "mb-15 black padding-top-25">${description}</p>
         <h6><a class="btn-brdr-primary plr-25 basketBtn bold" data-id = ${articul}>В корзину</a></h6>
     </div>
     </div>
     <a class="close"></a>
  </div> `;
    }
  }
  outArr1.innerHTML = str1;
}

document.onclick = function clickCard(event) {
  hide(event);
  basketBtn(event);
};
