'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500; // ms

  var lastTimeout;
  window.debounce = function () {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      window.renderWizard.update();
    }, DEBOUNCE_INTERVAL);
  };
})();
