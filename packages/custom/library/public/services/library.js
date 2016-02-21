(function () {
  'use strict';

  angular
    .module('mean.library')
    .factory('Library', Library);

  Library.$inject = [];

  function Library() {
    return {
      name: 'library'
    };
  }
})();
