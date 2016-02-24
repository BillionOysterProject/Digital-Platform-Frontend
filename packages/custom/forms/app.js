'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Forms = new Module('forms');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Forms.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Forms.routes(app, auth, database);

  Forms.angularDependencies(['ngDropzone', 'ui.tinymce', 'ui.select']);

  return Forms;
});
