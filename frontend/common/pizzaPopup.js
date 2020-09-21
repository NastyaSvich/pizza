function pizzaPopup(event){
  let articul = event.target.dataset.articul;
  let result = GetOne(articul).then(result => drawCardPopup(result))
}


function drawCardPopup(result){
let outArr1 = document.getElementById('consequence');
let str1 = ' ';
for (let i = 0; i < 1; i++) {
let name = result[i].name;
let price = result[i].price;
let description = result[i].description;
let cal = result[i].cal;
let uglev = result[i].uglev;
let belok = result[i].belok;
let zhir = result[i].zhir;
let img = result[i].img;


if (result[i]!==undefined) str1 +=
` <div>
     <div class="center-text">
     <div class="colum1">
         <div class="mlr-auto img-150x pos-relative"><img src="images/seller-2-200x200.png" alt="${name}"></div>
         <h3 class="center-text mt-20 lengthWords">${name}</h3>
         <h4 class="center-text mt-5 lengthWords"><b>${price} <span class = "large">руб.</span></b></h4>
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
         <h6><a href="#" class="btn-brdr-primary plr-25"><b>В корзину</b></a></h6>
     </div>
     </div>
     <a class="close"></a>
  </div> `;

}
outArr1.innerHTML = str1;
}
