'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var RestorationStation = new Module('restorationStation');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
RestorationStation.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  RestorationStation.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  RestorationStation.menus.add({
    title: 'Restoration Station',
    link: 'restorationStation',
    roles: ['authenticated'],
    menu: 'main'
  });

  RestorationStation.aggregateAsset('css', 'restorationStation.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    RestorationStation.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    RestorationStation.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    RestorationStation.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return RestorationStation;
});
