'use strict';

(function () {
  var popup = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var openPopupFocus = document.querySelector('.setup-open-icon');
  var userName = document.querySelector('.setup-user-name');

  setupSimilar.classList.remove('hidden');

  setupOpen.addEventListener('click', function () {
    window.utils.openPopup(popup);
  });

  setupClose.addEventListener('click', function () {
    window.utils.closePopup(popup);
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      window.utils.closePopup();
    }
  });

  openPopupFocus.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ENTER_KEY) {
      window.utils.openPopup();
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === window.utils.ESC_KEY && userName === document.activeElement) {
      evt.preventDefault();
    } else if (evt.key === window.utils.ESC_KEY) {
      window.utils.closePopup();
    }
  });
})();
