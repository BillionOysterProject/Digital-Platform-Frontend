(function () {
  'use strict';

  angular
    .module('mean.profile')
    .config(profile);

  profile.$inject = ['$stateProvider'];

  function profile($stateProvider) {
    $stateProvider.state('profile example page', {
      url: '/profile/example',
      templateUrl: 'profile/views/index.html'
    });
  }

})();
