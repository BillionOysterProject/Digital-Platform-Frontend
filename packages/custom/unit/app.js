'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Unit = new Module('unit');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Unit.register(function(app, auth, database, forms) {

  //We enable routing. By default the Package Object is passed to the routes
  Unit.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Unit.menus.add({
    title: 'Unit',
    link: 'unit',
    roles: ['authenticated'],
    menu: 'main'
  });

  Unit.aggregateAsset('css', 'unit.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Unit.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Unit.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Unit.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Unit;
});
