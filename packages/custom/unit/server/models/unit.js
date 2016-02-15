'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Unit Schema
 */
var UnitSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    stageOne: {
        unitTitle: {
            lessonTitle: {
                type: String,
                required: true,
                trim: true
            }
        },
        desiredResults: {
            fieldWork: {
                type: String,
                required: true,
                trim: true
            },
            scienceContent: {
                type: String,
                required: true,
                trim: true
            }
        },
        essentialQuestons: [{
            question: {
                type: String,
                required: true,
                trim: true
            }
        }],
        acquisition: {
            scienceContentSkills: {
                type: String,
                required: true,
                trim: true
            },
            mathContentSkills: {
                type: String,
                required: true,
                trim: true
            },
            fieldContentSkills: {
                type: String,
                required: true,
                trim: true
            }
        },
        lessons: {
            scienceLessons: {
                type: String,
                required: true,
                trim: true
            },
            mathLessons: {
                type: String,
                required: true,
                trim: true
            },
            fieldLessons: {
                type: String,
                required: true,
                trim: true
            }
        }
    },
    stage2: {
        stage2Evidence: {
            numberExpectation: {
                type: Array,
                required: false
            },
            scienceAndEngineering: {
                type: String,
                required: true,
                trim: true
            },
            disciplinaryCoreIdeas: {
                type: String,
                required: true,
                trim: true
            },
            crossCuttingConcepts: {
                type: String,
                required: true,
                trim: true
            }
        },
        assessmentEvidence: {
            researchProject: {
                type: String,
                required: true,
                trim: true
            },
            extensions: {
                type: String,
                required: true,
                trim: true
            }
        }
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    permissions: {
        type: Array
    },
    updated: {
        type: Array
    }
});

/**
 * Validations
 */
// UnitSchema.path('lessonUpload.title').validate(function(title) {
//   return !!title;
// }, 'Title cannot be blank');

// UnitSchema.path('lessonUpload.unit').validate(function(unit) {
//   return !!unit;
// }, 'Unit cannot be blank');

/**
 * Statics
 */
UnitSchema.statics.load = function (id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Unit', UnitSchema);