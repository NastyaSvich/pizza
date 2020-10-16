function pizzaAll(result) {
  console.log(window.location);
  const outArr = document.getElementById('menu');
  let str = ' ';
  let count;
  if (result.length > 0) {
    for (let i = 0; i < result.length; i += 1) {
      if (result[i].category === 'Пиццы') {
        count = 1;
        const { articul } = result[i];
        const { img } = result[i];
        const reslt = localStorage.getItem('arrBasket');
        const countBasket = JSON.parse(reslt);
        let style = `<h6 class="mt-20"><a class="btn-brdr-primary plr-25 basketBtn bold" data-id = ${articul}>В корзину</a></h6>`;
        let clas = 'col-lg-3 col-md-4 col-sm-6 card tranform-for-card';
        const { name } = result[i];
        const { price } = result[i];
        const { description } = result[i];
        if (countBasket !== null) {
          for (let j = 0; j < countBasket.btnCheck.length; j += 1) {
            if (articul === countBasket.btnCheck[j]) {
              clas = 'col-lg-3 col-md-4  col-sm-6 card tranform-for-card disable';
              style = `<h6 class="mt-20"><a class="btn-brdr-primary plr-25 basketBtn bold colorBnt" data-id = ${articul}>Добавлено</a></h6>`;
            }
          }
        }
        if (result[i] !== undefined) {
          str
  += `<div class='${clas}' id = ${articul}>
       <div class="center-text mb-30">
           <div class="img-200x mlr-auto pos-relative click"><img data-articul = ${articul} class = "imgForClick imgHeight" src=${img} alt="${name}"></div>
           <h5 class="mt-20 lengthWords">${name}</h5>
           <h4 class="mt-5 color-primary lengthWords"><b>${price}</b> <span class = "large">руб.</span></h4>
           <p data-articul = ${articul} class = "descr lengthWords padding-top-15">${description}</p>
           ${style}
       </div>
    </div>`;
        }
      }
    }
    if (count > 0) { outArr.innerHTML = str; } else { check(); }
  } else { check(); }
}
