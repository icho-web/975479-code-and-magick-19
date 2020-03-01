'use strict';

(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var coatColor = document.querySelector('.coat-color');
  var eyesColor = document.querySelector('.eyes-color');
  var fireballColor = document.querySelector('.fireball-color');

  var changeBackgroundColor = function (element, arr, input) {
    var randomValue = parseInt(window.utils.getRandomValue(0, arr.length), 10);
    element.style.background = arr[randomValue];
    element.style.fill = arr[randomValue];
    input.value = arr[randomValue];
  };

  wizardFireball.addEventListener('click', function () {
    changeBackgroundColor(wizardFireball, window.utils.FIREBALLS_COLOR, fireballColor);
  });

  wizardCoat.addEventListener('click', function () {
    window.debounce();
    changeBackgroundColor(wizardCoat, window.utils.COAT_COLOR, coatColor);

  });

  wizardEyes.addEventListener('click', function () {
    changeBackgroundColor(wizardEyes, window.utils.EYES_COLOR, eyesColor);
    window.debounce();
  });
})();
