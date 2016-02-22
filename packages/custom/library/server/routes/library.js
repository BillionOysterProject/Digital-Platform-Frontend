(function () {
  'use strict';

  /* jshint -W098 */
  // The Package is past automatically as first parameter
  module.exports = function (Library, app, auth, database) {

    var library = require('../controllers/library')(Library);
    app.route('/api/library/search')
      .get(library.search);
  };
})();
