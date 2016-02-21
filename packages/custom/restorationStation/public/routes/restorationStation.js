(function () {
  'use strict';

  angular
    .module('mean.restorationStation')
    .config(restorationStation);

  restorationStation.$inject = ['$stateProvider'];

  function restorationStation($stateProvider) {
    $stateProvider
    .state('restorationStation', {
      url: '/restorationStation',
      templateUrl: 'restorationStation/views/index.html'
    })
    .state('Oyster Restoration View', {
      url: '/restorationStation/ors',
      templateUrl: 'restorationStation/views/ors.html'
    })
    .state('Register ORS', {
      url: '/restorationStation/register',
      templateUrl: 'restorationStation/views/registerORS.html'
    });
  }

})();
