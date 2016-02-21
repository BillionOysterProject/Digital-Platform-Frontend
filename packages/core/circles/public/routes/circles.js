'use strict';

angular.module('mean.circles').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('manage circles', {
      url: '/circles/manage',
      templateUrl: 'circles/views/index.html',
      requiredCircles: {
       circles: ['admin']
      }
    }).state('create circles', {
      url: '/circles/create',
      templateUrl: 'circles/views/create.html',
      requiredCircles: {
        circles: ['admin']
      }
    });
  }
])
  .run(['$rootScope', '$state', '$http', 'MeanUser', '$meanConfig', '$cookies', '$location', function($rootScope, $state, $http, MeanUser, $meanConfig, $cookies, $location) {
      // $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        console.log('state changed');
        var acl = MeanUser.acl;
        console.log('acl');
        console.log(acl);
        // If the route has a circle requirement on it validate it
        console.log('fromState.requiredCircles');
        console.log(fromState);
        console.log(fromState.requiredCircles);

        if(toState.requiredCircles && angular.isArray(toState.requiredCircles.circles)) {
          for(var j = 0; j < toState.requiredCircles.circles.length; j++) {
            var requiredCircle = toState.requiredCircles.circles[j];
            // If MeanUser hasn't loaded yet, request circles directly
            if (acl.allowed) {
              checkCircle(acl, requiredCircle);
            } else {
              acl.then(aclCallback);
            }
          }
        }

        function aclCallback(response) {
          checkCircle(response, requiredCircle);
        }

        function checkCircle(acl, requiredCircle) {
          console.log('acl');
          console.log(acl);
          console.log('requiredCircle');
          console.log(requiredCircle);
          if(acl.allowed.indexOf(requiredCircle) === -1) {
            e.preventDefault();
            // Not Authenticated
            if(acl.allowed.indexOf('anonymous') !== -1) {
              $cookies.put('redirect', $location.path());
              $location.url($meanConfig.loginPage);
            } else { // Authenticated but not authorized
              $state.go(toState.requiredCircles.denyState || 'home');
            }
          }
        }
      }, function(error) {
        console.log('error');
      });
    }]
  );
