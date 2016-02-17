(function () {
  'use strict';

  angular
    .module('mean.forms')
    .config(forms);

  forms.$inject = ['$stateProvider'];

  function forms($stateProvider) {
    $stateProvider.state('forms example page', {
      url: '/forms/example',
      templateUrl: 'forms/views/index.html'
    });
  }

})();
