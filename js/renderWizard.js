'use strict';

(function () {

  var ARR_LENGTH = 4;
  var form = document.querySelector('.setup-wizard-form');
  var similarListElement = document.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizards) {
    for (var i = 0; i < ARR_LENGTH; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      var fragment = document.createDocumentFragment();
      fragment.appendChild(wizardElement);
      similarListElement.appendChild(fragment);
      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
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

})();
