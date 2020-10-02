//Получить все записи c БД
async function GetAll() {
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

//Удалить одну запись
async function DelOne(articul) {
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
async function UpdateOne(articul,articul_new, name, description, price, img, category, cal, uglev, belok, zhir) {
  const url = `http://localhost:3000/products/update?articul=${articul}`;
  const body = {
    articul: `${articul_new}`,
    name: `${name}`,
    description: `${description}`,
    price: price,
    img: `${img}`,
    category: `${category}`,
    cal: cal,
    uglev: uglev,
    belok: belok,
    zhir: zhir
  };
  const res = await fetch (url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = res.json();
  console.log(data);
  return data;
}

//Добавить одну запись
async function AddOne(articul_new, name, description, price, img, category, cal, uglev, belok, zhir) {
  const url = `http://localhost:3000/products`;
  const body = {
    articul: `${articul_new}`,
    name: `${name}`,
    description: `${description}`,
    price: price,
    img: `${img}`,
    category: `${category}`,
    cal: cal,
    uglev: uglev,
    belok: belok,
    zhir: zhir
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

//Добавить одну запись в заказы
async function AddOneOrder(articul_new,name,surname,tel,type,priceAll,price,namePizza,counts) {
const url = `http://localhost:3000/orders`;
  const body = {
    articul: `${articul_new}`,
    name: `${name}`,
    surname: `${surname}`,
    tel: `${tel}`,
    type: `${type}`,
    priceAll: `${priceAll}`,
    price: price,
    namePizza: namePizza,
    counts: counts
  };
const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
}


//Показать все заказы
async function GetAllOrder() {
  const url = `http://localhost:3000/orders`;
  const res = await fetch (url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
    })
    const data = res.json();
    return data;
}

//Удалить заказ
async function DelOneOrder(articul) {
 const url = `http://localhost:3000/orders/delete/?articul=${articul}`;
 const res = await fetch (url, {
   method: 'DELETE',
   headers: {
     'Content-Type': 'application/json',
   }
   })
   const data = res.json();
   return data;
}
