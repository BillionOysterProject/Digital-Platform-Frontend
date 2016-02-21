(function () {
  'use strict';

  angular
    .module('mean.lesson')
    .config(lesson);

  lesson.$inject = ['$stateProvider'];

  function lesson($stateProvider) {
    $stateProvider.state('lesson', {
      url: '/lesson',
      templateUrl: 'lesson/views/index.html',
      requiredCircles: {
        circles: ['teacher']
      }
    });
  }

})();
