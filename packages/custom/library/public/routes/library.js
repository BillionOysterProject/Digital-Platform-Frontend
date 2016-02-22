(function () {
  'use strict';

  angular
    .module('mean.library')
    .config(library);

  library.$inject = ['$stateProvider'];

  function library($stateProvider) {
    $stateProvider.state('library', {
      url: '/library',
      templateUrl: 'library/views/index.html'
    });
  }

})();
// 'use strict';
//
// // Lesson authorization helpers
// var hasAuthorization = function(req, res, next) {
//   if (!req.user.isAdmin && !req.lesson.user._id.equals(req.user._id)) {
//     return res.status(401).send('User is not authorized');
//   }
//   next();
// };
//
// var hasPermissions = function(req, res, next) {
//
//     req.body.permissions = req.body.permissions || ['authenticated'];
//
//     for (var i = 0; i < req.body.permissions.length; i++) {
//       var permission = req.body.permissions[i];
//       if (req.acl.user.allowed.indexOf(permission) === -1) {
//             return res.status(401).send('User not allowed to assign ' + permission + ' permission.');
//         }
//     }
//
//     next();
// };
//
// module.exports = function(Library, app, auth) {
//
//   var lessons = require('../controllers/library')(Library);
//
//   app.route('/api/library/all')
//     .get(auth.requiresLogin, library.all);
//   //   .post(auth.requiresLogin, hasPermissions, lessons.create);
//   // app.route('/api/library/:lessonId')
//   //   .get(auth.isMongoId, lessons.lesson);
//   //   // .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, hasPermissions, lessons.update)
//   //   // .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, hasPermissions, lessons.destroy);
//   //
//   // // Finish with setting up the lessonId param
//   // app.param('lessonId', lessons.lesson);
// };
