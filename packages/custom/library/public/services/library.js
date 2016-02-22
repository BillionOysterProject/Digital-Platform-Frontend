(function() {
  'use strict';

  angular
    .module('mean.library')
    .factory('Library', Library);

  function Library($q, $http, $timeout) {

    return {
      searchDB: function(data) {

        let deferred = $q.defer();
        //
        $http({
          method: 'GET',
          url: '/api/library/search',
          params: {
            textSearch: data
          },
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }).success(function(data) {
          console.log(data)
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
