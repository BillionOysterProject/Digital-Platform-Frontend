(function () {
  'use strict';

  angular
    .module('mean.restorationStation')
    .config(restorationStation);

  restorationStation.$inject = ['$stateProvider'];

  function restorationStation($stateProvider) {
    $stateProvider.state('restorationStation example page', {
      url: '/restorationStation/example',
      templateUrl: 'restorationStation/views/index.html'
    });
  }

})();
