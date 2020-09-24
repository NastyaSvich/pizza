(function resultForAll(){
  let result = GetAll().then(result => pizzaAll(result))
})();

function pizzaPopup(event){
  let articul = event.target.dataset.articul;
  let result = GetOne(articul).then(result => drawCardPopup(result))
}
