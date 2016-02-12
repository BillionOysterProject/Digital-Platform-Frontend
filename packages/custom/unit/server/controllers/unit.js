'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Unit = mongoose.model('Unit'),
    config = require('meanio').loadConfig(),
    _ = require('lodash');

module.exports = function(Units) {

    return {
        /**
         * Find unit by id
         */
        units: function(req, res, next, id) {
            Unit.load(id, function(err, unit) {
                if (err) return next(err);
                if (!unit) return next(new Error('Failed to load unit ' + id));
                req.unit = unit;
                res.json(unit);
                next();
            });
        },
        /**
         * Create an Unit
         */
        create: function(req, res) {

            var unit = new Unit(req.body);
            unit.user = req.user;
            console.log(req.body);
            Unit.save(function(err) {
                if (err) {
                    console.log(err)
                    return res.status(500).json({
                        error: 'Cannot save the Unit'
                    });
                }

                Unit.events.publish({
                    action: 'created',
                    user: {
                        name: req.user.name
                    },
                    url: config.hostname + '/units/' + unit._id,
                    name: unit.title
                });

                res.json(unit);
            });
        },
        /**
         * Show an unit
         */
        show: function(req, res) {

            Unit.events.publish({
                action: 'viewed',
                user: {
                    name: req.user.name
                },
                // name: req.unit.title,
                url: config.hostname + '/units/' + req.unit._id
            });

            res.json(req.unit);
        },
        /**
         * List of Articles
         */
        all: function(req, res) {
            var query = req.acl.query('Unit');

            query.find({}).sort('-created').populate('user', 'name username').exec(function(err, articles) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the units'
                    });
                }

                res.json(unit)
            });

        }
    };
}