(function resultForAll() {
  const result = GetAll().then((result) => pizzaAll(result))
    .then(GetAll().then((result) => pastaAll(result)))
    .then(GetAll().then((result) => hotAll(result)))
    .then(GetAll().then((result) => saladAll(result)))
    .then(GetAll().then((result) => dessertAll(result)))
    .then(GetAll().then((result) => drinksAll(result)));
}());

function pizzaPopup(event) {
  const { articul } = event.target.dataset;
  const result = GetOne(articul).then((result) => drawCardPopup(result));
}
