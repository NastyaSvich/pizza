function addProduct() {
  const outArr = document.getElementById('product');
  let str = '';
  str
          += `
          <form id="contact" action="" method="post" onsubmit="return false;" class = "formAdd">
            <h3 class = "center-text">Добавление товара</h3>
            <fieldset>
              <input placeholder="Артикул" maxlength="30" id = "articul" type="text" tabindex="1" required autofocus>
            </fieldset>
            <fieldset>
              <input placeholder="Название" maxlength="10" id = "name" type="text" tabindex="2" required>
            </fieldset>
            <fieldset>
              <input placeholder="Описание" maxlength="50" id = "descript" type="text" tabindex="3" required>
            </fieldset>
            <fieldset>
              <input placeholder="Цена" maxlength="10" id = "price" type="number" tabindex="4" required>
            </fieldset>
            <fieldset>
              <input placeholder="Ссылка на картинку(png)" title="Пример: https://ibb.co/2kB0StS" type="text" id = "img" tabindex="5" required>
            </fieldset>
            <fieldset>
              <h4>Выберите категорию продукта!</h4>
              <select>
                <option value="Пиццы" name = "opt">Пиццы</option>
                <option value="Паста" name = "opt">Паста</option>
                <option value="Горячее" name = "opt">Горячее</option>
                <option value="Салаты" name = "opt">Салаты</option>
                <option value="Десерты" name = "opt">Десерты</option>
                <option value="Напитки" name = "opt">Напитки</option>
              </select>
            </fieldset>
            <fieldset>
              <input placeholder="Калории" maxlength="5" id = "cal" type="number" tabindex="6" required>
            </fieldset>
            <fieldset>
              <input placeholder="Углеводы" maxlength="5" id = "uglev" type="number" tabindex="7" required>
            </fieldset>
            <fieldset>
              <input placeholder="Белки" maxlength="5" id = "belok" type="number" tabindex="8" required>
            </fieldset>
            <fieldset>
              <input placeholder="Жиры" maxlength="5" id = "zhir" type="number" tabindex="9" required>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="submit" onclick = "checkForm();">Отправить</button>
            </fieldset>
          </form> `;

  outArr.innerHTML = str;
}
