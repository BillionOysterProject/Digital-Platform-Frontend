(function() {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.library')
    .directive('searchCard', function() {
      return {
        restrict: 'AE',
        template: '<div class="library-item science socialstudies technology history math engineering classroom urbaneco">' +
          '<a href="lesson-output.html" class="panel-link">' +
            '</a><div class="panel panel-primary" data-category="transition"><a href="lesson-output.html" class="panel-link">' +
              '<div class="panel-heading">' +
                '<h3 class="panel-title"><i class="fa fa-book"></i> Field Intro</h3>' +
                '<span class="grade pull-right">{{grade}}</span>' +
              '</div>' +
              '<div class="panel-body">' +
                '<small>Field</small>' +
                '<h6>{{title}}</h6>' +
                '<p ng-bind-html="summary"></p>' +
              '</div>' +
          '</a>' +
          '<div class="panel-footer hidden-xs hidden-sm">' +
            '<span class="unit">NYCs Urban Ecosystem</span>' +
            '<span class="subjects pull-right">' +
              '<div class="dropdown">' +
                '<button class="btn btn-xs btn-simple dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">' +
                  '6 Subjects' +
                  '<span class="caret"></span>' +
                '</button>' +
                '<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">' +
                  '<li><a data-filter=".science">Science</a></li>' +
                  '<li><a data-filter=".socialstudies">Social Studies</a></li>' +
                  '<li><a data-filter=".technology">Technology</a></li>' +
                  '<li><a data-filter=".history">History</a></li>' +
                  '<li><a data-filter=".math">Math</a></li>' +
                  '<li><a data-filter=".technology">Technology</a></li>' +
                '</ul>' +
              '</div>' +
            '</span>' +
          '</div>' +
          '</div>' +
        '</div>',
        scope: {
          title: '@',
          grade: '@',
          setting: '@',
          summary: '@'
        },
        require: 'ngModel',
        replace: true
      };
    });
  //
  // angular
  //   .module('mean.forms')
  //   .directive('dropDown', function() {
  //     return {
  //       restrict: 'AE',
  //       template: '<div class="{{outerColumn}}">' +
  //         '<div class="form-group">' +
  //         '<label for="{{inTitle}}">{{inTitle}}</label>' +
  //         '<select class="form-control " ng-model="outModel" selected="selected ">' +
  //         '<option ng-repeat="item in inSelectableArray ">{{item}}</option>' +
  //         '</select>' +
  //         '</div>' +
  //         '</div>',
  //       scope: {
  //         outModel: '=ngModel',
  //         inSelectableArray: '=',
  //         inTitle: '@',
  //         outerColumn: '@'
  //       },
  //       require: 'ngModel',
  //       replace: true
  //     };
  //   });
  //
  // angular
  //   .module('mean.forms')
  //   .directive('textArea', function() {
  //     return {
  //       restrict: 'AE',
  //       template: '<div class="{{outerColumn}}">' +
  //         '<label for="{{linTitle}}">{{inTitle}}</label>' +
  //         '<textarea ui-tinymce ng-model="outModel"></textarea>' +
  //         '</div>',
  //       scope: {
  //         outModel: '=ngModel',
  //         inTitle: '@',
  //         outerColumn: '@'
  //       },
  //       require: 'ngModel',
  //       replace: true
  //     };
  //   });
})();
