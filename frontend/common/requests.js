 // window.onload =
const articul = 'qwerty';
let articul_new = 'qwerty123';
let name = 'Дьябло';
let description = 'Супер острая пицца!';
let price = 300;
let img = 'https://sun1-26.userapi.com/c845217/v845217566/227da/51nVlvvYe-A.jpg';
let category = 'Пиццы';
let cal = 260;
let uglev = 120;
let belok = 10;
let zhir = 130;

//Получить все записи c БД
function GetAll() {
  const url = `http://localhost:3000/products`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

//Удалить одну запись
function DelOne(articul) {
 const url = `http://localhost:3000/products/delete/?articul=${articul}`;
 return fetch(url, {
   method: 'DELETE',
   headers: {
     'Content-Type': 'application/json',
   },
 }).then((res) => res.json())
   .then((data) => {
     console.log(data);
   });
}

//Получить одну запись
function GetOne(articul) {
 const url = `http://localhost:3000/products/getproduct/?articul=${articul}`;
 return fetch(url, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
   },
 }).then((res) => res.json())
   .then((data) => {
     console.log(data);
   });
}

//Обновить одну запись
function UpdateOne(articul, articul_new, name, description, price, img, category, cal, uglev, belok, zhir) {
  const url = `http://localhost:3000/products/update?articul=${articul}`;
  const body = {
    articul: `${articul_new}`,
    name: `${name}`,
    description: `${description}`,
    price: `${price}`,
    img: `${img}`,
    category: `${category}`,
    cal: `${cal}`,
    uglev: `${uglev}`,
    belok: `${belok}`,
    zhir: `${zhir}`
  };
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

//Добавить одну запись
function AddOne(articul_new, name, description, price, img, category, cal, uglev, belok, zhir) {
  const url = `http://localhost:3000/products`;
  const body = {
    articul: `${articul_new}`,
    name: `${name}`,
    description: `${description}`,
    price: `${price}`,
    img: `${img}`,
    category: `${category}`,
    cal: `${cal}`,
    uglev: `${uglev}`,
    belok: `${belok}`,
    zhir: `${zhir}`
  };
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}
//если захочу ассинхрон, то перед function поставить async, а вместо return - await

// Вызов функции:
// GetOne(articul)
// или
// GetOne('qwerty111')
