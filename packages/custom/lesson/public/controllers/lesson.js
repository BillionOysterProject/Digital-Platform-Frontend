(function() {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.lesson')
    .controller('LessonController', LessonController);

  LessonController.$inject = ['$scope', 'Global', 'Lesson'];

  function LessonController($scope, Global, Lesson) {

    $scope.global = Global;

    $scope.package = {
      name: 'lesson'
    };

    $scope.isArray = angular.isArray;

    // Own callback after Editor-Creation
    $scope.editorCallback = function(editor, name) {
      console.log('createCallback', editor, name);
    };
    // Event after an editor is created --> gets the editor instance on optional the editor name if set
    $scope.$on('editorCreated', function(event, editor, name) {
      console.log('createEvent', editor, name);
    });

    //TODO > make handoutsFileInput, vocabulary, nycScienceScopeSequence, ngssStandards, commonCoreEla, commonCoreMath
    $scope.sendModel = {
      lessonUpload: {
        title: undefined,
        unit: 'Action'
      },
      lessonOverview: {
        grade: '6-8',
        classPeriods: '1',
        setting: 'Classroom',
        subjectAreas: null,
        protocolConnections: null,
        lessonSummary: ''
      },
      lessonObjectives: null,
      materialsResources: {
        supplies: null,
        teacherResources: null,
        handoutsFileInput: null,
        vocabulary: null
      },
      background: null,
      instructionPlan: {
        engage: null,
        teacherResources: null,
        explain: null,
        elaborate: null,
        evaluate: null
      },
      standards: {
        nycScienceScopeSequence: null,
        ngssStandards: null,
        commonCoreEla: null,
        commonCoreMath: null
      }
    };

    $scope.lessonConfig = [{
      'blockTitle': 'Lesson Upload',
      'blockItems': {
        'title': {
          'label': 'Lesson Title',
          'required': true,
          'colClass': 'col-md-8',
          'type': 'text'
        },
        'unit': {
          'label': 'unit',
          'required': true,
          'colClass': 'col-md-4',
          'type': 'select',
          'options': [
            'Action', 'Field'
          ]
        }
      }
    }, {
      'blockTitle': 'Lesson Overview',
      'blockItems': {
        'grade': {
          'label': 'Grade',
          'required': true,
          'colClass': 'col-md-8',
          'type': 'select',
          'options': [
            '6-8', '4th', '5th', '6th', '7th', '8th'
          ]
        },
        'classPeriod': {
          'label': 'Class Period',
          'required': true,
          'colClass': 'col-md-4',
          'type': 'select',
          'options': [
            '1', '2', '3', '4', '5', '6', '7', '8'
          ]
        },
        'setting': {
          'label': 'Setting',
          'required': true,
          'colClass': 'col-md-4',
          'type': 'select',
          'options': [
            'Classroom', 'Field'
          ]
        },
        'subjectAreas': {
          'label': 'Subject Area(s)',
          'required': true,
          'colClass': 'col-md-4',
          'type': 'select',
          'options': [
            'Art',
            'Agriscience & Technology',
            'Arithmetic',
            'Algebra',
            'Band',
            'Biology',
            'Chemistry',
            'Civics'
          ]
        },
        'protocolConnections': {
          'label': 'Protocol Connections',
          'required': true,
          'colClass': 'col-md-4',
          'type': 'text'
        },
        'lessonSummary': {
          'label': 'Lesson Summary',
          'required': true,
          'colClass': 'col-md-4',
          'type': 'text'
        }
      }
    }, {
      'blockTitle': 'Lesson Objectives',
      'blockItems': {
        'objectives': {
          'label': 'Objectives',
          'required': true,
          'type': 'text'
        }
      }
    }, {
      'blockTitle': 'Materials & Resources Objectives',
      'blockItems': {
        'supplies': {
          'label': 'Supplies',
          'required': true,
          'type': 'text'
        },
        'teacherResources': {
          'label': 'Teacher Resources',
          'required': true,
          'type': 'text'
        },
        'handouts': {
          'label': 'Objectives',
          'required': false,
          'type': 'text'
        },
        'vocabulary': {
          'label': 'Vocabulary',
          'required': false,
          'type': 'text'
        }
      }
    }, {
      'blockTitle': 'Background',
      'blockItems': {
        'background': {
          'label': 'Background',
          'required': false,
          'type': 'text'
        }
      }
    }, {
      'blockTitle': 'Instruction Plan',
      'partialRequire': 1,
      'blockItems': {
        'engage': {
          'label': 'Engage',
          'required': false,
          'type': 'text'
        },
        'explore': {
          'label': 'Explore',
          'required': false,
          'type': 'text'
        },
        'explain': {
          'label': 'Explain',
          'required': false,
          'type': 'text'
        },
        'elaborate': {
          'label': 'Elaborate',
          'required': false,
          'type': 'text'
        },
        'evaluate': {
          'label': 'Evaluate',
          'required': false,
          'type': 'text'
        }
      }
    }, {
      'blockTitle': 'Standards',
      'partialRequire': 1, //TODO - Logic for error message if at least one of the blockItems is not set
      'blockItems': {
        'nycScienceScopeSequence': {
          'label': 'NEW YORK CITY SCIENCE SCOPE & SEQUENCE',
          'required': false,
          'type': 'text'
        },
        'ngssStandards': {
          'label': 'NGSS STANDARDS',
          'required': false,
          'type': 'text'
        },
        'commonCoreEla': {
          'label': 'COMMON CORE ELA',
          'required': false,
          'type': 'text'
        },
        'commonCoreMath': {
          'label': 'COMMON CORE MATH',
          'required': false,
          'type': 'text'
        }
      }
    }];
    $scope.onSubmit = function() {
      console.log('here')
        // alert(JSON.stringify(vm.model), null, 2);
      Lesson.addLesson($scope.sendModel);
    }
  }
})();
