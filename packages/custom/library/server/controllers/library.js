'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
  // Unit = mongoose.model('Unit'),
  var config = require('meanio').loadConfig();
  var _ = require('lodash');
  // var Lesson = mongoose.model('Lesson');

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

      var sendObject = {}

      var searchString = String(req.query.textSearch);

      mongoose.model('Lesson').find({
        'lessonUpload.title': new RegExp(searchString, 'i')
      }).exec(function(err, lessons) {
        if (err) {
          return res.status(500).json({
            error: 'Cannot list the lessons'
          });
        }
        if (results == null || results[0] == null) {
          return res.send(400);
        }
        res.json(results);
      });

    },
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
