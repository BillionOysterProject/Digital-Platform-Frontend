(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.library')
    .controller('LibraryController', LibraryController);

  LibraryController.$inject = ['$scope', 'Global', 'Library'];

  function LibraryController($scope, Global, Library) {
    $scope.global = Global;
    $scope.package = {
      name: 'library'
    };

    $scope.searchBackend = function(){
      Library.searchDB($scope.searchItem).then(function(a){
        $scope.queryResults = a;
      })
    }

  }
})();
