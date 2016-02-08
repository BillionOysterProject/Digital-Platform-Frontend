(function() {
  'use strict';

  angular
    .module('mean.unit')
    .config(unit);

  unit.$inject = ['$stateProvider'];

  function unit($stateProvider) {
    $stateProvider.state('unit', {
      url: '/unit',
      templateUrl: 'unit/views/index.html',
      requiredCircles: {
        circles: ['authenticated'],
        denyState: 'auth.login'
      }
    });
  }

})();
