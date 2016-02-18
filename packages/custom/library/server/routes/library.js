(function () {
  'use strict';

  /* jshint -W098 */
  // The Package is past automatically as first parameter
  module.exports = function (Library, app, auth, database) {

    app.get('/api/library/example/anyone', function (req, res, next) {
      res.send('Anyone can access this');
    });

    app.get('/api/library/all', auth.requiresLogin, function (req, res, next) {
      // Library.all();
      res.jsonp(req.user)
      // res.send('Only authenticated users can access this');
    });

    app.get('/api/library/example/admin', auth.requiresAdmin, function (req, res, next) {
      res.send('Only users with Admin role can access this');
    });

    app.get('/api/library/example/render', function (req, res, next) {
      Library.render('index', {
        package: 'library'
      }, function (err, html) {
        //Rendering a view from the Package server/views
        res.send(html);
      });
    });
  };
})();
