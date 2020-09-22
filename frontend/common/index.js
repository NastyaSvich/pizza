(function resultForAll(){
  // let read = UpdateOne(articul, articul_new, name, description, price, img, category, cal, uglev, belok, zhir)
  // .then(result => console.log(result));
  // .then(AddOne(articul_new, name, description, price, img, category, cal, uglev, belok, zhir)
  // .then(result => console.log(result)));
  // let read = AddOne(articul_new, name, description, price, img, category, cal, uglev, belok, zhir)
  // .then(result => console.log(result)).then(GetAll().then(result => console.log(result)));

  let result = GetAll().then(result => pizzaAll(result))

})();

function pizzaPopup(event){
  let articul = event.target.dataset.articul;
  let result = GetOne(articul).then(result => drawCardPopup(result))
}
