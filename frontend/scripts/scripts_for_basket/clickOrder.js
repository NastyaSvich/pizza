document.onclick = function clickOrder(event) {
  hide(event);
};

function hide(event){
  const click = event.target;
  if (click.classList.contains('btnOrder')) {
    document.querySelector('.b-popup').classList.remove('hide');
    document.querySelector('html').style.overflow = 'hidden';
  }
  else{
    if(click.className === 'b-popup' || click.className === 'basketBtn' || click.className === 'close'){
    document.querySelector('.b-popup').classList.add('hide');
    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('html').style.overflow = 'auto';
  }
  }
}
