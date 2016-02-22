'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Lesson = new Module('lesson');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Lesson.register(function (app, auth, database, circles, forms) {

    //We enable routing. By default the Package Object is passed to the routes
    Lesson.routes(app, auth, database);

    Lesson.aggregateAsset('css', 'lesson.css');

    //TODO remove once components all done
    Lesson.angularDependencies(['ngDropzone', 'ui.tinymce']);

    //We are adding a link to the main menu for all authenticated users
    Lesson.menus.add({
        title: 'Lesson',
        link: 'lesson',
        roles: ['authenticated'],
        menu: 'main'
    });

    /**
      //Uncomment to use. Requires meanio@0.3.7 or above
      // Save settings with callback
      // Use this for saving data from administration pages
      Lesson.settings({
          'someSetting': 'some value'
      }, function(err, settings) {
          //you now have the settings object
      });

      // Another save settings example this time with no callback
      // This writes over the last settings.
      Lesson.settings({
          'anotherSettings': 'some value'
      });

      // Get settings. Retrieves latest saved settigns
      Lesson.settings(function(err, settings) {
          //you now have the settings object
      });
      */

    return Lesson;
});