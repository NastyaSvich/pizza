function showProduct(){
  const outArr = document.getElementById('product');
  let str = ``;
          str
          += `
          <div id='container'>
            <div class='cell'><input type='search' id ="search" autocomplete="off" autofocus placeholder='Введите артикль товара'></div>
            <div class='cell'><button  onclick="getProduct()" class='button append' id = "click">Search</button></div>
          </div>
          <div id = "result"></div>`;

    outArr.innerHTML = str;
}
