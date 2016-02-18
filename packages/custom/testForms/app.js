'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var TestForms = new Module('testForms');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
TestForms.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  TestForms.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  // TestForms.menus.add({
  //   title: 'testForms example page',
  //   link: 'testForms example page',
  //   roles: ['authenticated'],
  //   menu: 'main'
  // });
  //
  TestForms.aggregateAsset('css', 'testForms.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    TestForms.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    TestForms.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    TestForms.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return TestForms;
});
