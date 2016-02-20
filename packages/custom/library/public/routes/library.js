(function () {
  'use strict';

  angular
    .module('mean.library')
    .config(library);

  library.$inject = ['$stateProvider'];

  function library($stateProvider) {
    $stateProvider.state('library', {
      url: '/library/example',
      templateUrl: 'library/views/index.html'
    });
  }

})();
