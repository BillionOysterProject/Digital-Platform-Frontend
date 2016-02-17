(function () {
  'use strict';

  angular
    .module('mean.forms')
    .factory('Forms', Forms);

  Forms.$inject = [];

  function Forms() {
    return {
      name: 'forms'
    };
  }
})();
