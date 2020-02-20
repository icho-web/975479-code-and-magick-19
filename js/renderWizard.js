'use strict';

(function () {
  var ARR_LENGTH = 4;
  var NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var generateCharacter = function (count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
      arr.push({
        name: NAME[window.utils.getRandomValue(0, NAME.length - 1)] + ' ' + SURNAME[window.utils.getRandomValue(0, SURNAME.length - 1)],
        coatColor: window.utils.COAT_COLOR[window.utils.getRandomValue(0, window.utils.COAT_COLOR.length - 1)],
        eyesColor: window.utils.EYES_COLOR[window.utils.getRandomValue(0, window.utils.EYES_COLOR.length - 1)]
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

  renderWizard(arrLength);
})();
