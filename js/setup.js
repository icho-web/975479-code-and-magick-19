'use strict';

var ARR_LENGTH = 4;
var NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var userDialog = document.querySelector('.setup');
var getRandomArr = function (name) {
  return Math.floor(Math.random() * name.length);
};
var setupSimilar = document.querySelector('.setup-similar');

setupSimilar.classList.remove('hidden');
userDialog.classList.remove('hidden');

var getGenerateCharacter = function (count) {
  var arr = [];
  for (var i = 0; i <= count - 2; i++) {
    arr.push({
      name: NAME[getRandomArr(NAME)] + ' ' + SURNAME[getRandomArr(SURNAME)],
      coatColor: COAT_COLOR[getRandomArr(COAT_COLOR)],
      eyesColor: EYES_COLOR[getRandomArr(EYES_COLOR)]
    });
  }
  return arr;
};
var arrLength = getGenerateCharacter(ARR_LENGTH);

var renderWizard = function (wizards) {
  for (var i = 0; i <= wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    var fragment = document.createDocumentFragment();
    fragment.appendChild(wizardElement);
    similarListElement.appendChild(fragment);
    wizardElement.querySelector('.setup-similar-label').textContent = arrLength[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = arrLength[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = arrLength[i].eyesColor;
  }
};

renderWizard(arrLength);
