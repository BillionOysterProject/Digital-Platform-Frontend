(function () {
  'use strict';

  angular
    .module('mean.lesson')
    .factory('Lesson', Lesson);

  Lesson.$inject = [];

  function Lesson() {
    return {
      name: 'lesson'
    };
  }
})();
