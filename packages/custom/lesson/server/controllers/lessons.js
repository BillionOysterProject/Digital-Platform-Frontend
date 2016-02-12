'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Lesson = mongoose.model('Lesson'),
    config = require('meanio').loadConfig(),
    _ = require('lodash');

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
         * Create an lesson
         */
        create: function(req, res) {

            var lesson = new Lesson(req.body);
            lesson.user = req.user;
            console.log(req.body);
            lesson.save(function(err) {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        error: 'Cannot save the lesson'
                    });
                }

                Lessons.events.publish({
                    action: 'created',
                    user: {
                        name: req.user.name
                    },
                    url: config.hostname + '/lessons/' + lesson._id,
                    name: lesson.title
                });

                res.json(lesson);
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
         * List of Articles
         */
        all: function(req, res) {
            var query = req.acl.query('Lesson');

            query.find({}).sort('-created').populate('user', 'name username').exec(function(err, articles) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the lessons'
                    });
                }

                res.json(lessons)
            });

        }
    };
}
