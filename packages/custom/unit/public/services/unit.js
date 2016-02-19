(function() {
  'use strict';

  angular
    .module('mean.unit')
    .factory('Unit', Unit);

  function Unit($q, $http, $timeout) {

    return {
      addUnit: function(data) {
        let deferred = $q.defer();

        $http({
          method: 'POST',
          url: '/api/units',
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
