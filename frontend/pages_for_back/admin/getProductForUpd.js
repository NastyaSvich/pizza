function getProductForUpd(){
  const input = document.querySelector('input');

  if (input.value.length === 0) { document.getElementById('result').innerHTML = '<div id="str1" class = "black">Введите артикль!</div>'; }
  else{
  let articul = input.value;
  let result = GetOne(articul).then(result => prodOneUpd(result))
  }
}
