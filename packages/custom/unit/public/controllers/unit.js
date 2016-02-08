(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.unit')
    .controller('UnitController', UnitController);

  UnitController.$inject = ['$scope', 'Global', 'Unit'];

  function UnitController($scope, Global, Unit) {
    $scope.global = Global;
    $scope.package = {
      name: 'unit'
    };
  }
})();