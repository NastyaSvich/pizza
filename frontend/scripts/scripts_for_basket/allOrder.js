window.onload = function allOrder() {
  const outArr = document.getElementById('basket');
  let str = ' ';
  const reslt = localStorage.getItem('arrBasket');
  const countBasket = JSON.parse(reslt);
  if (localStorage.arrBasket !== undefined && Number(localStorage.counter) !== 0) {
    for (let i = 0; i < countBasket.name.length; i += 1) {
      const name = countBasket.name[i];
      const img = countBasket.img[i];
      const price = countBasket.price[i];
      const priceFirst = countBasket.priceFirst[i];
      const count = countBasket.counts[i];
      if (localStorage.counter !== undefined) {
        str
           += `  <div class="col-md-6" id = "sect${i}">
              <div class="sided-90x mb-30 margin-l-r">
                  <div class="s-left"><img class="br-3 imgHeight90" src= ${img} alt=${name}></div>
                        <div class="s-right">
                          <h5 class="mb-10 lengthWords"><b>${name}</b><b class = "float-right red">руб.</b><b class="color-primary float-right" id = "ord${i}">${price}</b></h5>
                          <div class="sc-157aem8-0 crBzjJ">
                          <button type="button" class="sc-157aem8-2 joqjoD" data = ${i} onclick="minusCount(${priceFirst}, ${i})">
                          <svg width="10" height="10" class="icon"><rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect></svg>
                          </button>
                          <div class="sc-157aem8-1 hoRCZk" id="count${i}">${count}</div>
                          <button type="button" class="sc-157aem8-2 joqjoD" data = ${i} onclick="plusCount(${priceFirst}, ${i})">
                          <svg width="10" height="10" class="icon"><g fill="#454B54"><rect x="4" width="2" height="10" ry="1"></rect><rect y="4" width="10" height="2" rx="1"></rect></g>
                          </svg>
                          </button>
                          </div>
                        </div>
                        <a class="del" onclick="delet(${i})"><img class = "delete" src = "images/del.svg" alt="del"></img></a>
                  </div>
              </div>`;
      }
    }
    outArr.innerHTML = str;
    sumOrder();
  } else { checkBasket(); }
};
