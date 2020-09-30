// (function resultForAll(){
//   let result = GetAll().then(result => allProducts(result))
// })();
//
//
// function allProducts(result) {
//   const outArr = document.getElementById('orders');
//   let str = ``;
//
//   if (result.length > 0) {
//     for (let i = 0; i < result.length; i += 1) {
//       let name = result[i].name;
//       let surname = result[i].surname;
//       let tel = result[i].tel;
//       let type = result[i].type;
//       let priceAll = result[i].priceAll;
//       let articul = result[i].articul;
//       let ord = ' ';
//       for (let j = 0; j < result[i].namePizza.length; j += 1) {
//         ord += `<p>${result[i].namePizza[j]}(${result[i].counts[j]} шт.) — ${result[i].price[j]}руб.<br></p>`;
//       }
//         if (result[i] !== undefined) {
//           str
//           += `
//           <tr id = "td${i}">
//           <td>${name} ${surname}</td>
//           <td><a href="tel:+${tel}">+${tel}</a></td>
//           <td>${type}</td>
//           <td>${ord}</td>
//           <td>${priceAll} руб.</td>
//           <td><a class="ready" onclick="deleteOrder(${i})" id = "order${i}" data-id = ${articul}><img src = "../../images/ready.svg" alt="ready"></img></a></td>
//           </tr>`;
//         }
//     }
//
//     outArr.innerHTML = str;
//   } else { checkOrder(); }
// }
