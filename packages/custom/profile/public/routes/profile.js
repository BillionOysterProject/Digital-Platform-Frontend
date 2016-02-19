(function () {
  'use strict';

  angular
    .module('mean.profile')
    .config(profile);

  profile.$inject = ['$stateProvider'];

  function profile($stateProvider) {
    $stateProvider
    .state('profile', {
      url: '/profile',
      templateUrl: 'profile/views/index.html'
    })
    .state('password', {
      url: '/profile/password',
      templateUrl: 'profile/views/password.html'
    })
    .state('notifications', {
      url: '/profile/notifications',
      templateUrl: 'profile/views/notifications.html'
    })
    .state('students', {
      url: '/profile/students',
      templateUrl: 'profile/views/students.html'
    });
  }

})();
