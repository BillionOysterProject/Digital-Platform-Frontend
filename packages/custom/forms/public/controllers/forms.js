(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.forms')
    .controller('FormsController', FormsController);

  FormsController.$inject = ['$scope', 'Global', 'Forms'];

  function FormsController($scope, Global, Forms) {
    $scope.global = Global;
    $scope.package = {
      name: 'forms'
    };
    $scope.catsModel = {
      test: 'test'
    }
  }
})();
