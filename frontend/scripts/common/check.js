function check() {
  const tag = document.getElementById('menu');
  tag.style.display = 'block';
  tag.innerHTML = '<h5 class = "center-text"><b>Пицц не найдено :(</b></h5>';
}

function checkPasta() {
  const tag = document.getElementById('menuPasta');
  tag.style.display = 'block';
  tag.innerHTML = '<h5 class = "center-text"><b>Пасты не найдено :(</b></h5>';
}

function checkHot() {
  const tag = document.getElementById('menuHot');
  tag.style.display = 'block';
  tag.innerHTML = '<h5 class = "center-text"><b>Горячего не найдено :(</b></h5>';
}

function checkSalad() {
  const tag = document.getElementById('menuSalad');
  tag.style.display = 'block';
  tag.innerHTML = '<h5 class = "center-text"><b>Салатов не найдено :(</b></h5>';
}

function checkDessert() {
  const tag = document.getElementById('menuDessert');
  tag.style.display = 'block';
  tag.innerHTML = '<h5 class = "center-text"><b>Десертов не найдено :(</b></h5>';
}

function checkDrinks() {
  const tag = document.getElementById('menuDrinks');
  tag.style.display = 'block';
  tag.innerHTML = '<h5 class = "center-text"><b>Напитков не найдено :(</b></h5>';
}

function checkBasket() {
  const tag = document.getElementById('basket');
  tag.style.display = 'block';
  tag.innerHTML = '<h5 class = "center-text"><b>Ваша корзина пуста :(</b></h5>';
}
