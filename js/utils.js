'use strict';
(function () {
  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALLS_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var getRandomValue = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };

  var openPopup = function (popup) {
    popup.classList.remove('hidden');
  };

  var closePopup = function (popup) {
    popup.classList.add('hidden');
  };

  window.utils = {
    COAT_COLOR: COAT_COLOR,
    EYES_COLOR: EYES_COLOR,
    FIREBALLS_COLOR: FIREBALLS_COLOR,
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    getRandomValue: getRandomValue,
    openPopup: openPopup,
    closePopup: closePopup
  };
})();
