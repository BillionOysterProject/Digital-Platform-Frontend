(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.testForms')
    .controller('TestFormsController', TestFormsController);

  TestFormsController.$inject = ['$scope', 'Global', 'TestForms'];

  function TestFormsController($scope, Global, TestForms) {
    $scope.global = Global;
    $scope.package = {
      name: 'testForms'
    };
  }
})();