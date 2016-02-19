(function() {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.unit')
    .controller('UnitController', UnitController);

  UnitController.$inject = ['$scope', 'Global', 'Unit'];

  function UnitController($scope, Global, Unit) {
    $scope.global = Global;
    $scope.package = {
      name: 'unit'
    };

    $scope.totalQuestions = 2;

    $scope.getNumber = function(num) {
      return new Array(num);
    }

    //manual tab controls
    $scope.isActive = [{active:true},{active:false}];

    $scope.goToOtherTab = function(tab) {
      $scope.isActive[tab].active = true;
    }

    $scope.sendModel = {
      stageOne: {
        unitTitle: {
          lessonTitle: undefined
        },
        desiredResults: {
          fieldWork: undefined,
          scienceContent: undefined
        },
        essentialQuestons: {
          question: [undefined]
        },
        acquisition: {
          scienceContentSkills: undefined,
          mathContentSkills: undefined,
          fieldContentSkills: undefined
        },
        lessons: {
          scienceLessons: undefined,
          mathLessons: undefined,
          fieldLessons: undefined
        }
      },
      stage2: {
        stage2Evidence: {
          numberExpectation: 'K-PS2-1 Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object.',
          scienceAndEngineering: undefined,
          disciplinaryCoreIdeas: undefined,
          crossCuttingConcepts: undefined
        },
        assessmentEvidence: {
          researchProject: undefined,
          extensions: undefined
        }
      }
    };

    $scope.onSubmit = function() {
      console.log('here')
        // alert(JSON.stringify(vm.model), null, 2);
      Unit.addUnit($scope.sendModel);
    }
  }
})();
