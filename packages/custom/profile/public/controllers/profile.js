(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.profile')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$scope', 'Global', 'Profile'];

  function ProfileController($scope, Global, Profile) {
    $scope.global = Global;
    $scope.package = {
      name: 'profile'
    };
  }
})();