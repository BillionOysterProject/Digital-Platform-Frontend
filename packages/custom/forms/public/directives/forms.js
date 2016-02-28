(function() {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.forms')
    .directive('textInput', function() {
      return {
        restrict: 'AE',
        templateUrl: 'forms/templates/textInput.html',
        scope: {
          outModel: '=ngModel',
          inTitle: '@',
          outerColumn: '@',
          placeHolder: '@',
          required: '=',
          errorMessage: '@',
          showErrorOnSubmit: '='
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
          '<label for="{{inTitle}}">{{inTitle}}</label> ' +
          '<small ng-if="required">(Required)</small>' +
          '<select class="form-control " ng-model="outModel" selected="selected ">' +
          '<option ng-repeat="item in inSelectableArray ">{{item}}</option>' +
          '</select>' +
          '</div>' +
          '</div>',
        scope: {
          outModel: '=ngModel',
          inSelectableArray: '=',
          inTitle: '@',
          outerColumn: '@',
          required: '='
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
        templateUrl: 'forms/templates/textArea.html',
        scope: {
          outModel: '=ngModel',
          inTitle: '@',
          outerColumn: '@',
          required: '=',
          errorMessage: '@',
          showErrorOnSubmit: '='
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
          placeholder: "@",
          required: '=',
          errorMessage: '@',
          showErrorOnSubmit: '='
        },
        require: 'ngModel',
        replace: true
      };
    });
})();
