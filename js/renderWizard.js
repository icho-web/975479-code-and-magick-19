'use strict';

(function () {

  var MAX_WIZARDS = 4;
  var form = document.querySelector('.setup-wizard-form');
  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizards) {
    similarListElement.innerHTML = '';
    var takeNumber = wizards.length > MAX_WIZARDS ? MAX_WIZARDS : wizards.length;
    for (var i = 0; i < takeNumber; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      var fragment = document.createDocumentFragment();
      fragment.appendChild(wizardElement);
      similarListElement.appendChild(fragment);
      wizardElement.querySelector('.setup-similar-label').innerText = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].colorEyes;
    }
  };

  var popup = document.querySelector('.setup');
  var buttonSubmit = document.querySelector('.setup-submit');
  form.addEventListener('submit', function (evt) {
    buttonSubmit.textContent = 'Данные отправляются...';
    buttonSubmit.disabled = true;

    window.backend.save(new FormData(form), function () {
      popup.classList.add('hidden');
      buttonSubmit.textContent = 'Сохранить';
      buttonSubmit.disabled = false;
    });
    evt.preventDefault();
  });

  window.backend.load(renderWizard, window.backend.errorHandler);

  var wizards = [];
  var successHandler = function (data) {
    wizards = data;
  };
  window.backend.load(successHandler);

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === document.querySelector('.wizard-coat').style.fill) {
      rank += 2;
    }
    if (wizard.colorEyes === document.querySelector('.wizard-eyes').style.fill) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    renderWizard(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.renderWizard = {
    update: updateWizards
  };

})();
