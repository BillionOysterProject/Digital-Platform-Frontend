(function () {
  'use strict';

  angular
    .module('mean.restorationStation')
    .factory('RestorationStation', RestorationStation);

  RestorationStation.$inject = [];

  function RestorationStation() {
    return {
      name: 'restorationStation'
    };
  }
})();
