// (function () {
//   'use strict';
//
//   // Article authorization helpers
//   var hasAuthorization = function(req, res, next) {
//     if (!req.user.isAdmin && !req.article.user._id.equals(req.user._id)) {
//       return res.status(401).send('User is not authorized');
//     }
//     next();
//   };
//
//   var hasPermissions = function(req, res, next) {
//
//       req.body.permissions = req.body.permissions || ['authenticated'];
//
//       for (var i = 0; i < req.body.permissions.length; i++) {
//         var permission = req.body.permissions[i];
//         if (req.acl.user.allowed.indexOf(permission) === -1) {
//               return res.status(401).send('User not allowed to assign ' + permission + ' permission.');
//           }
//       }
//
//       next();
//   };
//
//   /* jshint -W098 */
//   // The Package is past automatically as first parameter
//   module.exports = function (Lesson, app, auth, database) {
//
//     // var lessons = require('../controllers/lessons')(Lessons);
//     app.get('/api/lesson/example/anyone', function (req, res, next) {
//       res.send('Anyone can access this');
//     });
//
//     app.get('/api/lesson/example/auth', auth.requiresLogin, function (req, res, next) {
//       res.send('Only authenticated users can access this');
//     });
//
//     app.get('/api/lesson/example/admin', auth.requiresAdmin, function (req, res, next) {
//       res.send('Only users with Admin role can access this');
//     });
//
//     app.get('/api/lesson/example/render', function (req, res, next) {
//       Lesson.render('index', {
//         package: 'lesson'
//       }, function (err, html) {
//         //Rendering a view from the Package server/views
//         res.send(html);
//       });
//     });
//   };
// })();

'use strict';

// Lesson authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && !req.lesson.user._id.equals(req.user._id)) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

var hasPermissions = function(req, res, next) {

    req.body.permissions = req.body.permissions || ['authenticated'];

    for (var i = 0; i < req.body.permissions.length; i++) {
      var permission = req.body.permissions[i];
      if (req.acl.user.allowed.indexOf(permission) === -1) {
            return res.status(401).send('User not allowed to assign ' + permission + ' permission.');
        }
    }

    next();
};

module.exports = function(Lessons, app, auth) {

  var lessons = require('../controllers/lessons')(Lessons);

  app.route('/api/lessons')
    .get(lessons.all)
    .post(auth.requiresLogin, hasPermissions, lessons.create);
  app.route('/api/lessons/:lessonId')
    .get(auth.isMongoId, lessons.show);
    // .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, hasPermissions, lessons.update)
    // .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, hasPermissions, lessons.destroy);

  // Finish with setting up the lessonId param
  app.param('lessonId', lessons.lesson);
};
