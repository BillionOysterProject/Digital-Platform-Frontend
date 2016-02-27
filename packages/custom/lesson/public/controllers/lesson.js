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
        subjectAreas: [],
        protocolConnections: null,
        lessonSummary: ''
      },
      lessonObjectives: null,
      materialsResources: {
        supplies: null,
        teacherResources: null,
        handoutsFileInput: null,
        vocabulary: []
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
        nycScienceScopeSequence: [],
        ngssStandards: [],
        commonCoreEla: [],
        commonCoreMath: []
      }
    };

    //TODO - make these a service
    $scope.defaultArrays = {
      nycScienceScopeOptions: [
        "PS1A Structure and Properties of matter",
        "PS1B Chemical Reactions",
        "PS1C Nuclear Processes",
        "ESS1A The Universe and Its Stars",
        "ESS1B Earth and the Solar System",
        "ESS1C The History of Planet Earth ESS2 Earth’s",
        "ESS2A Earth Materials and Systems",
        "ESS2B Plate Tectonics and Large-Scale System Interactions",
        "ESS2C The Roles of Water in Earth’s Surface Processes",
        "PS1 Matter and Its Interactions",
        "Grade 8, Unit1: Humans and the Environment"
      ],
      vocabOptions: [
        'Art', 'Ecosystem', 'Hypothesis', 'Oyster', 'Science'
      ],
      subjectAreaOptions: [
        'Art',
        'Agriscience & Technology',
        'Arithmetic',
        'Algebra',
        'Band',
        'Biology',
        'Chemistry',
        'Civics'
      ],
      unit: ['Action', 'Field'],
      grade: ['6-8', '4th', '5th', '6th', '7th', '8th'],
      classPeriod: ['1', '2', '3', '4', '5', '6', '7', '8'],
      setting: ['Classroom', 'Field']
    };

    $scope.onSubmit = function() {
      Lesson.addLesson($scope.sendModel);
    }
  }
})();
