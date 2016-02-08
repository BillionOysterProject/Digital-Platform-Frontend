(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.lesson')
    .controller('LessonController', LessonController);

  LessonController.$inject = ['$scope', 'Global', 'Lesson'];

  function LessonController($scope, Global, Lesson) {
    $scope.global = Global;
    $scope.package = {
      name: 'lesson'
    };
  }
})();