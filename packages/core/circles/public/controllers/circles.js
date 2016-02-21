'use strict';

/* jshint -W098 */
angular.module('mean.circles').controller('CirclesController', ['$scope', '$state', 'Global', 'Circles',
    function($scope, $state, Global, Circles) {
        var vm = this;

        vm.global = Global;
        

        vm.availableCircles = [];

        Circles.all(function(acl) {
            for (var index in acl.circles) {
                vm.availableCircles.push(index);
            }
        }, function(error) {
            $state.go('home');
        });

        vm.create = function(valid) {
            if (!valid) return;

            var circle = new Circles(vm.circle);
            circle.$save(function(response) {
                vm.availableCircles.push(circle.name);
                vm.circle = {};
            }, function(err) {
                alert('Cannot save the circle');
            });
        };
    }
]);
