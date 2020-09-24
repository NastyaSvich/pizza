(function resultForAll(){
  let result = GetAll().then(result => pizzaAll(result))
  .then(GetAll().then(result => pastaAll(result)))
  .then(GetAll().then(result => hotAll(result)))
  .then(GetAll().then(result => saladAll(result)))
  .then(GetAll().then(result => dessertAll(result)))
  .then(GetAll().then(result => drinksAll(result)));
})();

function pizzaPopup(event){
  let articul = event.target.dataset.articul;
  let result = GetOne(articul).then(result => drawCardPopup(result))
}
