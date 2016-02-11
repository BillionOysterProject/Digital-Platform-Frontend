(function () {
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
        
        console.log($scope.addLesson);
        //     $scope.copyFields = copyFields;
        //     function copyFields(fields) {
        //   fields = angular.copy(fields);
        //   addRandomIds(fields);
        //   return fields;
        // }
        //     function addNew() {
        //   $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
        //   var repeatsection = $scope.model[$scope.options.key];
        //   var lastSection = repeatsection[repeatsection.length - 1];
        //   var newsection = {};
        //   if (lastSection) {
        //     newsection = angular.copy(lastSection);
        //   }
        //   repeatsection.push(newsection);
        // }
        
        // function addRandomIds(fields) {
        //   unique++;
        //   angular.forEach(fields, function(field, index) {
        //     if (field.fieldGroup) {
        //       addRandomIds(field.fieldGroup);
        //       return; // fieldGroups don't need an ID
        //     }
            
        //     if (field.templateOptions && field.templateOptions.fields) {
        //       addRandomIds(field.templateOptions.fields);
        //     }
            
        //     field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
        //   });
        // }
        
        // function getRandomInt(min, max) {
        //   return Math.floor(Math.random() * (max - min)) + min;
        // }
        // //formly management starts here
        // let vm = this;

        // vm.originalFields = angular.copy(vm.fields);
        // vm.onSubmit = onSubmit;

        // vm.model = {
        //     awesome: true
        // };
        // vm.options = {
        //     formState: {
        //         awesomeIsForced: false
        //     }
        // };
        
        // vm.options = {};
        
        // init();

        // // vm.fields = [
        // //     {
        // //         "key": "text",
        // //         "type": "input",
        // //         "className": "form-control",
        // //         "templateOptions": {
        // //             "label": "Text",
        // //             "placeholder": "Type here to see the other field become enabled..."
        // //         }
        // //     },
        // //     {
        // //         "key": "text2",
        // //         "type": "input",
        // //         "templateOptions": {
        // //             "label": "Hey!",
        // //             "placeholder": "This one is disabled if there is no text in the other input"
        // //         },
        // //         "expressionProperties": {
        // //             "templateOptions.disabled": "!model.text"
        // //         }
        // //     }
        // // ];
        // function init() {
        // vm.model = {
        //     investments: [
        //         {
        //             investmentName: 'abc',
        //             investmentDate: (new Date()).toDateString(),
        //             stockIdentifier: '',
        //             investmentValue: '',
        //             relationshipName: '',
        //             complianceApprover: '',
        //             requestorComment: ''
        //         },
        //         {
        //             investmentName: 'haf',
        //             investmentDate: (new Date()).toDateString(),
        //             stockIdentifier: '',
        //             investmentValue: '',
        //             relationshipName: '',
        //             complianceApprover: '',
        //             requestorComment: ''
        //         }
        //     ]
        // };

        // vm.fields = [
        //     {
        //         type: 'repeatSection',
        //         key: 'investments',
        //         templateOptions: {
        //             btnText: 'Add another investment',
        //             fields: [
        //                 {
        //                     className: 'row',
        //                     fieldGroup: [
        //                         {
        //                             className: 'col-xs-4',
        //                             type: 'input',
        //                             key: 'investmentName',
        //                             templateOptions: {
        //                                 label: 'Name of Investment:',
        //                                 required: true
        //                             }
        //                         },
        //                         {
        //                             type: 'input',
        //                             key: 'investmentDate',
        //                             className: 'col-xs-4',
        //                             templateOptions: {
        //                                 label: 'Date of Investment:',
        //                                 placeholder: 'dd/mm/yyyy such as 20/05/2015',
        //                                 dateFormat: 'DD, d  MM, yy'
        //                             }
        //                         },
        //                         {
        //                             type: 'input',
        //                             key: 'stockIdentifier',
        //                             className: 'col-xs-4',
        //                             templateOptions: {
        //                                 label: 'Stock Identifier:'
        //                             }
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     "type": "radio",
        //                     "key": "type",
        //                     "templateOptions": {
        //                         "options": [
        //                             {
        //                                 "name": "Text Field",
        //                                 "value": "input"
        //                             },
        //                             {
        //                                 "name": "TextArea Field",
        //                                 "value": "textarea"
        //                             },
        //                             {
        //                                 "name": "Radio Buttons",
        //                                 "value": "radio"
        //                             },
        //                             {
        //                                 "name": "Checkbox",
        //                                 "value": "checkbox"
        //                             }
        //                         ],
        //                         "label": "Field Type",
        //                         "required": true
        //                     }
        //                 },
        //                 {
        //                     type: 'input',
        //                     key: 'investmentValue',
        //                     templateOptions: {
        //                         label: 'Value:'
        //                     },
        //                     expressionProperties: {
        //                         'templateOptions.disabled': '!model.stockIdentifier'
        //                     }
        //                 },
        //                 {
        //                     type: 'checkbox',
        //                     model: 'formState',
        //                     key: 'selfExecuting',
        //                     templateOptions: {
        //                         label: 'Are you executing this trade?'
        //                     }
        //                 },
        //                 {
        //                     hideExpression: '!formState.selfExecuting',
        //                     fieldGroup: [
        //                         {
        //                             type: 'input',
        //                             key: 'relationshipName',
        //                             templateOptions: {
        //                                 label: 'Name:'
        //                             }
        //                         },
        //                         {
        //                             type: 'select',
        //                             key: 'complianceApprover',
        //                             templateOptions:
        //                             {
        //                                 label: 'Compliance Approver:',
        //                                 options: [
        //                                     {
        //                                         name: 'approver 1',
        //                                         value: 'some one 1'
        //                                     },
        //                                     {
        //                                         name: 'approver 2',
        //                                         value: 'some one 2'
        //                                     }]
        //                             }
        //                         },
        //                         {
        //                             type: 'textarea',
        //                             key: 'requestorComment',
        //                             templateOptions:
        //                             {
        //                                 label: 'Requestor Comment',
        //                                 rows: 4
        //                             }
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }

        //     }
        // ];
        // }
        // vm.lessonUpload = {
        //     title: 'Lesson Upload'
        // }
        $scope.sendModel = {};
        
        $scope.lessonConfig = {
            "LESSON UPLOAD": {
                "formItems": [
                    {
                        "name": "lessonTitle",
                        "label": "LESSON TITLE",
                        "type": "input",
                        "colClass": "col-md-8",
                        "required": true
                    }, {
                        "name": "unit",
                        "label": "unit",
                        "type": "select",
                        "colClass": "col-md-4",
                        "selectOptions": [
                            "Action",
                            "Field"
                        ],
                        "required": true
                    }
                ]
            },
            "LESSON OVERVIEW": [
                {
                    "childRow": "col-md-6",
                    "formItems": [
                        {
                            "name": "grade",
                            "label": "grade",
                            "type": "select",
                            "colClass": "col-md-4",
                            "selectOptions": [
                                "6-8",
                                "4th",
                                "5th",
                                "6th",
                                "7th",
                                "8th"
                            ]
                        }, {
                            "name": "classPeriods",
                            "label": "classPeriods",
                            "type": "select",
                            "colClass": "col-md-4",
                            "selectOptions": [
                                "1", "2", "3", "4", "5", "6", "7", "8"
                            ]
                        }, {
                            "name": "setting",
                            "label": "setting",
                            "type": "select",
                            "colClass": "col-md-4",
                            "selectOptions": [
                                "Classroom", "Field"
                            ]
                        }, {

                        }
                    ]
                }, {
                    "childRow": "col-md-6",
                    "formItems": [
                        {
                            "name": "subjectAreas",
                            "label": "Subject Areas",
                            "type": "typeahead",
                            "colClass": "col-md-12",
                            "typeAheadOptions": [{
                                "grouping": "a",
                                "values": {
                                    "name": "abacus",
                                    "label": "Abacus"
                                }
                            }]
                        }
                    ]
                }
            ],
            "LESSON OBJECTIVES": {
                "name": "lessonTitle",
                "label": "LESSON TITLE",
                "type": "input"
            },
            "MATERIALS & RESOURCES": {
                "name": "lessonTitle",
                "label": "LESSON TITLE",
                "type": "input"
            },
            "BACKGROUND": {
                "name": "lessonTitle",
                "label": "LESSON TITLE",
                "type": "input"
            },
            "INSTRUCTION PLAN": {
                "name": "lessonTitle",
                "label": "LESSON TITLE",
                "type": "input"
            }
        };

        // function onSubmit() {
        //     // alert(JSON.stringify(vm.model), null, 2);
        //     Lesson.addLesson($scope.sendModel);
        // }
        $scope.onSubmit = function() {
            console.log('here')
            // alert(JSON.stringify(vm.model), null, 2);
            Lesson.addLesson($scope.sendModel);
        }
    }
})();