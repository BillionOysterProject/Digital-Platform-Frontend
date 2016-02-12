'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Lesson Schema
 */
var LessonSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  lessonUpload: {
    title: {
      type: String,
      required: true,
      trim: true
    },
    unit: {
      type: String,
      required: true,
      trim: true
    }
  },
  lessonOverview: {
    grade: {
      type: String,
      required: false,
      trim: true
    },
    classPeriods: {
      type: String,
      required: false,
      trim: true
    },
    setting: {
      type: String,
      required: false,
      trim: true
    },
    subjectAreas: {
      type: Array,
      required: false,
      trim: true
    },
    protocolConnections: {
      type: String,
      required: false,
      trim: true
    },
    lessonSummary: {
      type: String,
      required: false,
      trim: true
    }
  },
  lessonObjectives: {
    type: String,
    required: false,
    trim: true
  },
  materialsResources: {
    supplies: {
      type: String,
      required: false,
      trim: true
    },
    teacherResources: {
      type: String,
      required: false,
      trim: true
    },
    handoutsFileInput: {
      type: Array,
      required: false
    },
    vocabulary: {
      type: Array,
      required: false
    }
  },
  background: {
    type: String,
    required: false,
    trim: true
  },
  instructionPlan: {
    engage: {
      type: String,
      required: false,
      trim: true
    },
    teacherResources: {
      type: String,
      required: false,
      trim: true
    },
    explain: {
      type: String,
      required: false,
      trim: true
    },
    elaborate: {
      type: String,
      required: false,
      trim: true
    },
    evaluate: {
      type: String,
      required: false,
      trim: true
    }
  },
  standards: {
    nycScienceScopeSequence: {
      type: Array,
      required: false
    },
    ngssStandards: {
      type: Array,
      required: false
    },
    commonCoreEla: {
      type: Array,
      required: false
    },
    commonCoreMath: {
      type: Array,
      required: false
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
LessonSchema.path('lessonUpload.title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

LessonSchema.path('lessonUpload.unit').validate(function(unit) {
  return !!unit;
}, 'Unit cannot be blank');

/**
 * Statics
 */
LessonSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Lesson', LessonSchema);
