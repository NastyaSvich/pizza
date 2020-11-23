function getProduct() {
  const input = document.querySelector('input');

  if (input.value.length === 0) { document.getElementById('result').innerHTML = '<div id="str1" class = "black">Введите артикль!</div>'; } else {
    const articul = input.value;
    const result = GetOne(articul).then((result) => prodOne(result));
  }
}
