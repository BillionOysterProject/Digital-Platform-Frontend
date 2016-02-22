'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Lesson = mongoose.model('Lesson'),
  Unit = mongoose.model('Unit'),
  config = require('meanio').loadConfig(),
  _ = require('lodash'),
  Async = require('async');

module.exports = function(Lessons) {

  return {
    /**
     * Find lesson by id
     */
    lesson: function(req, res, next, id) {
      Lesson.load(id, function(err, lesson) {
        if (err) return next(err);
        if (!lesson) return next(new Error('Failed to load lesson ' + id));
        req.lesson = lesson;
        res.json(lesson);
        next();
      });
    },
    /**
     * search Unit and Lesson
     */
    search: function(req, res, next) {
      // Lesson.find(
      //   { $text : { $search : "text to look for" } },
      //
      // .load(id, function(err, lesson) {
      //     if (err) return next(err);
      //     if (!lesson) return next(new Error('Failed to load lesson ' + id));
      //     req.lesson = lesson;
      //     res.json(lesson);
      //     next();
      // });

      // console.log(req.params.textSearch);
      var sendObject = {}

      var searchString = String(req.query.textSearch);



      Async.parallel([
          function(callback) {
            // var query = req.acl.query('Lesson');
            // query.find({
            Lesson.find({
              'lessonUpload.title': new RegExp(searchString, 'i')
            }).exec(function(err, lessons) {

              if (err) {
                return res.status(500).json({
                  error: 'Cannot list the lessons'
                });
              }

              // sendObject.lesson = lessonArticles;
              callback(null, lessons)
            });
          },

          function(callback) {
            // var query = req.acl.query('Unit');
            // query.find({
            console.log(searchString)
            Unit.find({
              'stageOne.unitTitlelessonTitle': new RegExp(searchString, 'i')
            }).exec(function(err, units) {
              if (err) {
                return res.status(500).json({
                  error: 'Cannot list the lessons'
                });
              }

              sendObject.unit = units;
              callback(null, sendObject.unit)
            });
          }
        ],

        //Compute all results
        function(err, results) {
          console.log(results);
          if (err) {
            console.log(err);
            return res.send(400);
          }

          if (results == null || results[0] == null) {
            return res.send(400);
          }
          res.json(results)

        });
    },
    /**
     * Create an lesson
     */
    // create: function(req, res) {
    //
    //     var lesson = new Lesson(req.body);
    //     lesson.user = req.user;
    //     console.log(req.body);
    //     lesson.save(function(err) {
    //         if (err) {
    //             console.log(err)
    //             return res.status(500).json({
    //                 error: 'Cannot save the lesson'
    //             });
    //         }
    //
    //         Lessons.events.publish({
    //             action: 'created',
    //             user: {
    //                 name: req.user.name
    //             },
    //             url: config.hostname + '/lessons/' + lesson._id,
    //             name: lesson.title
    //         });
    //
    //         res.json(lesson);
    //     });
    // },
    /**
     * Show an article
     */
    show: function(req, res) {

      Lessons.events.publish({
        action: 'viewed',
        user: {
          name: req.user.name
        },
        // name: req.lesson.title,
        url: config.hostname + '/lessons/' + req.lesson._id
      });

      res.json(req.lesson);
    },
    /**
     * List of library values
     */
    all: function(req, res) {
      // var query = req.acl.query('Lesson');
      console.log(req.user);

      // query.find({}).sort('-created').populate('user', 'name username').exec(function(err, articles) {
      //     if (err) {
      //         return res.status(500).json({
      //             error: 'Cannot list the lessons'
      //         });
      //     }
      //
      //     res.json(lessons)
      // });

    }
  };
}
