(function () {
  'use strict';

  angular
    .module('mean.lesson')
    .config(lesson);

  lesson.$inject = ['$stateProvider', '$urlRouterProvider'];

  function lesson($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('lesson', {
      url: '/lesson',
      templateUrl: 'lesson/views/index.html',
      requiredCircles: {
        circles: ['team-manager']
      }
    });
  }

})();
