 // window.onload =

//Получить все записи c БД
async function GetAll() {
  try {
  const url = `http://localhost:3000/products`;
  const res = await fetch (url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
    })
    const data = res.json();
    return data;
  }
  catch (err) { check(); }
  return data;
}

//Удалить одну запись
async function DelOne() {
 const url = `http://localhost:3000/products/delete/?articul=${articul}`;
 const res = await fetch (url, {
   method: 'DELETE',
   headers: {
     'Content-Type': 'application/json',
   }
   })
   const data = res.json();
   return data;
}

//Получить одну запись
async function GetOne(articul) {
 const url = `http://localhost:3000/products/getproduct/?articul=${articul}`;
 const res = await fetch (url, {
   method: 'GET',
   headers: {
     'Content-Type': 'application/json',
   }
   })
   const data = res.json();
   return data;
}

//Обновить одну запись
async function UpdateOne() {
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
  const res = await fetch (url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = res.json();
  return data;
}

//Добавить одну запись
async function AddOne() {
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
  const res = await fetch (url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = res.json();
  return data;
}
