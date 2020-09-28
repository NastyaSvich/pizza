if(Number(localStorage.counter) === 0){
  document.getElementById("openWindow").classList.add("disable");
  document.getElementById("openWindow").classList.add("colorBnt");
}
if(Number(localStorage.counter) > 0){
  document.getElementById("openWindow").classList.remove("disable");
  document.getElementById("openWindow").classList.remove("colorBnt");
}

const SUBMIT = document.getElementById('submit');
SUBMIT.addEventListener('click', () => {
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let tel = document.getElementById("tel");
  if (!name.checkValidity() || !surname.checkValidity() || !tel.checkValidity()) {
      console.log("error");
  } else {
    parse()
  }
});
