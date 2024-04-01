// ==UserScript==
// @name       Жмакатель start
// @version    0.1
// @description  Нажимает кнопку после обновления страницы с задержкой и проверкой
// @author      Tonyrykozhop
// @match       https://sunflower-land.com/play/
// @grant       none
// @repo       https://github.com/Voopwraz/zhm9k_start
// ==/UserScript==

(function() {
  // ID кнопки
  const buttonId = 'start';

  // Флаг для проверки нажатия кнопки
  let buttonClicked = false;

  // Функция для нажатия кнопки
  function clickButton() {
    if (!buttonClicked) {
      buttonClicked = true;

      setTimeout(function() {
        const button = document.getElementById(buttonId);
        if (button) {
          button.click();
        }
      }, 10000); // 10 секунд
    }
  }

  // Наблюдатель за обновлениями DOM
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        clickButton();
      }
    });
  });

  // Начать наблюдение за DOM
  observer.observe(document.body, { childList: true });

  // Нажать кнопку сразу после загрузки страницы
  clickButton();
})();
