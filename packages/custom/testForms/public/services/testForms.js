(function () {
  'use strict';

  angular
    .module('mean.testForms')
    .factory('TestForms', TestForms);

  TestForms.$inject = [];

  function TestForms() {
    return {
      name: 'testForms'
    };
  }
})();
