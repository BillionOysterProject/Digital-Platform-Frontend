(function () {
  'use strict';

  angular
    .module('mean.unit')
    .factory('Unit', Unit);

  Unit.$inject = [];

  function Unit() {
    return {
      name: 'unit'
    };
  }
})();
