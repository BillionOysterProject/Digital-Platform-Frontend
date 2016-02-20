(function() {
  'use strict';

  angular
    .module('mean.lesson')
    .factory('Lesson', Lesson);
  // Lesson.$inject = ['$http', '$q', '$timeout'];

  function Lesson($q, $http, $timeout) {

    return {
      addLesson: function(data) {
        let deferred = $q.defer();

        console.log('hello!')
        $http({
          method: 'POST',
          url: '/api/lessons',
          data: JSON.stringify(data),
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).success(function(data) {
          deferred.resolve(data); // jshint ignore:line
        }).error(function(data, status) {
          console.log('ERROR getting dashboard data. status: ' + JSON.stringify(status) + ', data: ' + JSON.stringify(data));
          deferred.resolve({});
        });
        return deferred.promise;
      }
    };
  }
})();
