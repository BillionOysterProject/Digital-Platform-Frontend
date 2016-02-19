(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.restorationStation')
    .controller('RestorationStationController', RestorationStationController);

  RestorationStationController.$inject = ['$scope', 'Global', 'RestorationStation'];

  function RestorationStationController($scope, Global, RestorationStation) {
    $scope.global = Global;
    $scope.package = {
      name: 'restorationStation'
    };
  }
})();