'use strict';

// unit authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && !req.user.user._id.equals(req.user._id)) {
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

module.exports = function(Unit, app, auth) {

  var unit = require('../controllers/unit')(Unit);

  app.route('/api/units')
    .get(unit.all)
    .post(auth.requiresLogin, hasPermissions, unit.create);
  app.route('/api/units/:unitId')
    .get(auth.isMongoId, unit.units);

  // Finish with setting up the unitId param
  app.param('unitId', unit.units);
};