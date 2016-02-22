'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Library = new Module('library');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Library.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Library.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users

  Library.menus.add({
    title: 'Library',
    link: 'library',
    roles: ['authenticated'],
    menu: 'main'
  });

  Library.aggregateAsset('css', 'library.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Library.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Library.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Library.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Library;
});
