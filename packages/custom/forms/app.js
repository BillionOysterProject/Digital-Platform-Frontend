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

  // //We are adding a link to the main menu for all authenticated users
  // Forms.menus.add({
  //   title: 'forms example page',
  //   link: 'forms example page',
  //   roles: ['public'],
  //   menu: 'main'
  // });

  Forms.angularDependencies(['ngDropzone', 'ui.tinymce']);

  Forms.aggregateAsset('css', 'forms.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Forms.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Forms.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Forms.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Forms;
});
