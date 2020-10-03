function delOne() {
  const articul = document.getElementById('articul').dataset.id;
  DelOne(articul);
  document.getElementById('articul').style.display = 'none';
  document.getElementById('product').innerHTML = '<div id="str1" class = "black">Товар удален!</div>';
  setTimeout(() => {
    document.getElementById('product').innerHTML = '';
  }, 2000);
}
