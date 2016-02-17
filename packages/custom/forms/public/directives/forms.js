(function() {
  'use strict';

  angular.module('mean.forms')
    .directive('textInput', function($compile){
      return {
        restrict: 'AE',
        scope: {
          outModel: '='
        },
        template: '<div class="col-md-8">' +
            '<div class="form-group">' +
            '<label for="lessontitle">Lesson Title</label>' +
            '<div class="row">' +
            '<div class="col-md-12">' +
            '<input type="text" class="form-control " id="lessontitle " placeholder="Lesson Title" ng-model="model">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>',
        replace: true,
        link: function($scope, elem, attr, ctrl){
          console.debug($scope)
        }
      }
  });
})();
