if (Number(localStorage.counter) === 0) {
  document.getElementById('openWindow').classList.add('disable');
  document.getElementById('openWindow').classList.add('colorBnt');
}
if (Number(localStorage.counter) > 0) {
  document.getElementById('openWindow').classList.remove('disable');
  document.getElementById('openWindow').classList.remove('colorBnt');
}

const SUBMIT = document.getElementById('submit');
SUBMIT.addEventListener('click', () => {
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const tel = document.getElementById('tel');
  if (!name.checkValidity() || !surname.checkValidity() || !tel.checkValidity()) {
    console.log('error');
  } else {
    parse();
  }
});
