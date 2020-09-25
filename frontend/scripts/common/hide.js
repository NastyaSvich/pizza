function hide(event){
  const click = event.target;
  if (document.querySelector('.b-popup').classList.contains('hide') === true && (click.className === 'imgForClick' || click.classList.contains('descr'))) {
    document.querySelector('html').style.overflow = 'hidden';
    document.getElementById('menu').querySelectorAll('.card').forEach(el => document.querySelector('.b-popup').classList.remove('hide'));
    pizzaPopup(event);
  }
  else{
    if(click.className === 'b-popup' || click.className === 'basketBtn' || click.className === 'close'){
    document.querySelector('.b-popup').classList.add('hide');
    document.getElementById('consequence').innerHTML = '';
    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'auto';
  }
  }
}

document.onclick = function clickCard(event) {
  hide(event);
  basketBtn(event);
};
