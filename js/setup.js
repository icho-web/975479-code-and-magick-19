'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var ARR_LENGTH = 4;
var NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALLS_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var similarListElement = document.querySelector('.setup-similar-list');
var setupSimilar = document.querySelector('.setup-similar');
var popup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var openPopupFocus = document.querySelector('.setup-open-icon');
var userName = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var coatColor = document.querySelector('.coat-color');
var eyesColor = document.querySelector('.eyes-color');
var fireballColor = document.querySelector('.fireball-color');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomValue = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var closePopup = function () {
  popup.classList.add('hidden');
};

var openPopup = function () {
  popup.classList.remove('hidden');
};

var generateCharacter = function (count) {
  var arr = [];
  for (var i = 0; i < count; i++) {
    arr.push({
      name: NAME[getRandomValue(0, NAME.length - 1)] + ' ' + SURNAME[getRandomValue(0, SURNAME.length - 1)],
      coatColor: COAT_COLOR[getRandomValue(0, COAT_COLOR.length - 1)],
      eyesColor: EYES_COLOR[getRandomValue(0, EYES_COLOR.length - 1)]
    });
  }
  return arr;
};

var arrLength = generateCharacter(ARR_LENGTH);

var renderWizard = function (wizards) {
  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var fragment = document.createDocumentFragment();
    fragment.appendChild(wizardElement);
    similarListElement.appendChild(fragment);
    wizardElement.querySelector('.setup-similar-label').textContent = arrLength[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = arrLength[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arrLength[i].eyesColor;
  }
};

setupSimilar.classList.remove('hidden');

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

openPopupFocus.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEY && userName === document.activeElement) {
    evt.preventDefault();
  } else if (evt.key === ESC_KEY) {
    closePopup();
  }
});

var currentNumber = 0;
var changeColor = function (colorNumber, arr, wizardItem, inputColor) {
  wizardItem.addEventListener('click', function () {
    if (colorNumber < arr.length - 1) {
      colorNumber++;
    } else {
      colorNumber = 0;
    }
    wizardItem.style.fill = arr[colorNumber];
    inputColor.value = arr[colorNumber];
  });
};

var changeBackground = function (colorNumber, arr, wizardItem, inputBackground) {
  wizardItem.addEventListener('click', function () {
    if (colorNumber < arr.length - 1) {
      colorNumber++;
    } else {
      colorNumber = 0;
    }
    wizardItem.style.background = arr[colorNumber];
    inputBackground.value = arr[colorNumber];
  });
};

changeColor(currentNumber, COAT_COLOR, wizardCoat, coatColor);
changeColor(currentNumber, EYES_COLOR, wizardEyes, eyesColor);
changeBackground(currentNumber, FIREBALLS_COLOR, wizardFireball, fireballColor);
renderWizard(arrLength);
