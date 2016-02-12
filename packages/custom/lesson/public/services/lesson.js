// 'use strict';

// //Articles service used for articles REST endpoint
// angular.module('mean.lesson').factory('Lesson', ['$http', '$q', '$timeout',
//     function ($http, $q, $timeout) {

//         let service = {

//             addLesson: function (data) {
//                 let deferred = $q.defer();
//                 // let libraryEntryJson = {
//                 //     'listing': {
//                 //         'id': String(widgetId)
//                 //     }
//                 // };
//                 console.log('hello!')
//                 $http({
//                     method: 'POST',
//                     url: '/api/lessons',
//                     data: JSON.stringify(data),
//                     withCredentials: true,
//                     headers: { 'Content-Type': 'application/json' }
//                 }).success(function (data) {
//                     deferred.resolve(data);  // jshint ignore:line
//                 }).error(function (data, status) {
//                     console.log('ERROR getting dashboard data. status: ' + JSON.stringify(status) + ', data: ' + JSON.stringify(data));
//                     deferred.resolve({});
//                 });
//                 return deferred.promise;
//             }
//         }
//         return service;
//     }
// ]);

(function () {
    'use strict';

    angular
        .module('mean.lesson')
        .factory('Lesson', ['$q', '$http', '$timeout',
            function ($q, $http, $timeout) {
                // Lesson.$inject = ['$http', '$q', '$timeout'];
                return {
                    addLesson: function (data) {
                        let deferred = $q.defer();
                        // let libraryEntryJson = {
                        //     'listing': {
                        //         'id': String(widgetId)
                        //     }
                        // };
                        console.log('hello!')
                        $http({
                            method: 'POST',
                            url: '/api/lessons',
                            data: JSON.stringify(data),
                            withCredentials: true,
                            headers: { 'Content-Type': 'application/json' }
                        }).success(function (data) {
                            deferred.resolve(data);  // jshint ignore:line
                        }).error(function (data, status) {
                            console.log('ERROR getting dashboard data. status: ' + JSON.stringify(status) + ', data: ' + JSON.stringify(data));
                            deferred.resolve({});
                        });
                        return deferred.promise;
                    }
                };
            }
        ])
})();

