(function () {
  'use strict';

  angular
    .module('theme')
    .controller('ThemeController', ThemeController);

  ThemeController.$inject = ['$scope'];

  function ThemeController($scope) {
    var vm = this;
  }
})();