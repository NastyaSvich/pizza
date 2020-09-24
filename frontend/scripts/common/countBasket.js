function countBasket(){
  if (localStorage.arrBasket !== undefined){
  let reslt = localStorage.getItem('arrBasket');
  let countBasket = JSON.parse(reslt);
  localStorage.counter = countBasket.name.length;
  if (localStorage.counter > 10){
    document.getElementById('n').innerHTML = '10+';
  }
  else {document.getElementById('n').innerHTML = localStorage.counter;}
}
}

(function countNow(){
  if (localStorage.counter !== undefined){
    if (localStorage.counter > 10){
      document.getElementById('n').innerHTML = '10+';
    }
    else {document.getElementById('n').innerHTML = localStorage.counter;}
  }
  else{document.getElementById('n').innerHTML = 0;}
})();
