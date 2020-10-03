(function resultForAll() {
  const result = GetAll().then((result) => pizzaAll(result));
}());

function pizzaPopup(event) {
  const { articul } = event.target.dataset;
  const result = GetOne(articul).then((result) => drawCardPopup(result));
}
