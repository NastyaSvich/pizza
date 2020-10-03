function allOrders(result) {
  const outArr = document.getElementById('orders');
  let str = `
  <tr>
    <th>Имя и Фамилия</th>
    <th>Номер</th>
    <th>Доставка</th>
    <th>Заказ</th>
    <th>К оплате</th>
    <th><font color="black">Оформить</font></th>
  </tr>`;

  if (result.length > 0) {
    for (let i = 0; i < result.length; i += 1) {
      const { name } = result[i];
      const { surname } = result[i];
      const { tel } = result[i];
      const { type } = result[i];
      const { priceAll } = result[i];
      const { articul } = result[i];
      let ord = ' ';
      for (let j = 0; j < result[i].namePizza.length; j += 1) {
        ord += `<p>${result[i].namePizza[j]}(${result[i].counts[j]} шт.) — ${result[i].price[j]}руб.<br></p>`;
      }
      if (result[i] !== undefined) {
        str
          += `
          <tr id = "td${i}">
          <td>${name} ${surname}</td>
          <td><a href="tel:+${tel}">+${tel}</a></td>
          <td>${type}</td>
          <td>${ord}</td>
          <td>${priceAll} руб.</td>
          <td><a class="ready" onclick="deleteOrder(${i})" id = "order${i}" data-id = ${articul}><img src = "../../images/ready.svg" alt="ready"></img></a></td>
          </tr>`;
      }
    }

    outArr.innerHTML = str;
  } else { checkOrder(); }
}

(function resultForAll() {
  const result = GetAllOrder().then((result) => allOrders(result));
}());
