(function () {
  'use strict';

  angular
    .module('mean.testForms')
    .config(testForms);

  testForms.$inject = ['$stateProvider'];

  function testForms($stateProvider) {
    $stateProvider.state('testForms example page', {
      url: '/testForms/example',
      templateUrl: 'testForms/views/index.html'
    });
  }

})();
