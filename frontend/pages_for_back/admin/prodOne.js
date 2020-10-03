function prodOne(result) {
  if (result.length === 0) { document.getElementById('result').innerHTML = '<div id="str1" class = "black">Такого товара нет!</div>'; } else {
    const outArr = document.getElementById('product');
    let str = '';
    const { name } = result[0];
    const { img } = result[0];
    const { price } = result[0];
    const art = result[0].articul;

    str
            += `<div class="col-md-6 m-auto" id = "articul" data-id = ${art}>
               <div class="sided-90x mb-30 margin-l-r">
                   <div class="s-left"><img class="br-3 imgHeight90" src= ${img} alt=${name}></div>
                         <div class="s-right">
                           <h5 class="mb-10 lengthWords"><b>${name}</b><b class = "float-right red">руб.</b><b class="color-primary float-right">${price}</b></h5>
                         </div>
                         <a class="del" onclick="delOne()"><img class = "delete" src = "../../images/del.svg" alt="del"></img></a>
                   </div>
               </div>`;

    outArr.innerHTML = str;
  }
}
