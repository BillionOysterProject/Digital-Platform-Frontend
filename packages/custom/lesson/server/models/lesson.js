'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Article Schema
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
      required: true,
      trim: true
    },
    classPeriods: {
      type: String,
      required: true,
      trim: true
    },
    setting: {
      type: String,
      required: true,
      trim: true
    },
    subjectAreas: {
      type: Array,
      required: true,
      trim: true
    },
    protocolConnections: {
      type: String,
      required: true,
      trim: true
    },
    lessonSummary: {
      type: String,
      required: true,
      trim: true
    }
  },
  lessonObjectives: {
    type: String,
    required: true,
    trim: true
  },
  materialsResources: {
    supplies: {
      type: String,
      required: true,
      trim: true
    },
    teacherResources: {
      type: String,
      required: true,
      trim: true
    },
    handoutsFileInput: {
      type: Array,
      required: false,
      trim: true
    },
    vocabulary: {
      type: Array,
      required: false
    }
  },
  background: {
    type: String,
    required: false
  },
  instructionPlan: {
    engage: {
      type: String,
      required: false,
      trim: true
    },
    teacherResources: {
      explore: String,
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
ArticleSchema.path('title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

ArticleSchema.path('content').validate(function(content) {
  return !!content;
}, 'Content cannot be blank');

/**
 * Statics
 */
ArticleSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Article', ArticleSchema);
