(function() {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.forms')
    .directive('textInput', function() {
      return {
        restrict: 'AE',
        template: '<div class="{{outerColumn}}">' +
          '<div class="form-group">' +
          '<label for="{{inTitle}}">{{inTitle}}</label>' +
          '<div class="row">' +
          '<div class="col-md-12">' +
          '<input type="text" class="form-control " id="lessontitle " placeholder="Lesson Title" ng-model="outModel">' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>',
        scope: {
          outModel: '=ngModel',
          inTitle: '@',
          outerColumn: '@'
        },
        require: 'ngModel',
        replace: true
      };
    });

  angular
    .module('mean.forms')
    .directive('dropDown', function() {
      return {
        restrict: 'AE',
        template: '<div class="{{outerColumn}}">' +
          '<div class="form-group">' +
          '<label for="{{inTitle}}">{{inTitle}}</label>' +
          '<select class="form-control " ng-model="outModel" selected="selected ">' +
          '<option ng-repeat="item in inSelectableArray ">{{item}}</option>' +
          '</select>' +
          '</div>' +
          '</div>',
        scope: {
          outModel: '=ngModel',
          inSelectableArray: '=',
          inTitle: '@',
          outerColumn: '@'
        },
        require: 'ngModel',
        replace: true
      };
    });

  angular
    .module('mean.forms')
    .directive('textArea', function() {
      return {
        restrict: 'AE',
        template: '<div class="{{outerColumn}}">' +
          '<label for="{{linTitle}}">{{inTitle}}</label>' +
          '<textarea ui-tinymce ng-model="outModel"></textarea>' +
          '</div>',
        scope: {
          outModel: '=ngModel',
          inTitle: '@',
          outerColumn: '@'
        },
        require: 'ngModel',
        replace: true
      };
    });
    angular
    .module('mean.forms')
    .directive('selectTwoDropdown', function() {
      return {
        restrict: 'AE',
        templateUrl: 'forms/templates/selectTwoDropdown.html',
        scope: {
          outModel: '=ngModel',
          inTitle: '@',
          outerColumn: '@',
          optionsArray: '=',
          placeholder: "@"
        },
        require: 'ngModel',
        replace: true
      };
    });
})();
