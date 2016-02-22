(function () {
  'use strict';

  angular
    .module('theme.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('theme', {
        url: '/theme',
        templateUrl: 'modules/theme/client/views/them.client.view.html',
        controller: 'ThemeController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Theme'
        }
      });
  }
})();