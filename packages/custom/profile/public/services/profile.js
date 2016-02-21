(function () {
  'use strict';

  angular
    .module('mean.profile')
    .factory('Profile', Profile);

  Profile.$inject = [];

  function Profile() {
    return {
      name: 'profile'
    };
  }
})();
