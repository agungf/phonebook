'use strict';

angular.module('phonebookApp')
  .controller('PhonebookCtrl', function ($scope, $http, $location, Auth, User, ngDialog, DTOptionsBuilder) {
    //initialize add or update action, default to Add
    $scope.action = 'Add';
    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withOption('order', [1, 'asc']);

    var dtId = '';
    $scope.dataReload = function(){  
      $('#' + dtId).DataTable().destroy();            
      $scope.users = User.query();
    };

    $scope.$on('event:dataTableLoaded', function(event, loadedDT) {
            dtId = loadedDT.id;
    });

    $scope.newPbToggle = false; //default edit/add form hided

    $scope.newPhonebook = function () {
      $scope.user = {};
      $scope.submitted = false;
      $scope.newPbToggle = true;
      $scope.action = 'Add';
    };
    $scope.editPhonebook = function (user) {
      $scope.user = user;
      $scope.submitted = false;
      $scope.action = 'Update';
      $scope.newPbToggle = true;          
    };    

    // form submit action
    $scope.newPbSubmit = function(form) {
      $scope.submitted = true;      
      // form is valid and actionis update
      if(form.$valid && $scope.action === 'Update') { //update user
        Auth.changePhonebook(          
          $scope.user._id,
          $scope.user.name,
          $scope.user.phone,
          $scope.user.notes
        )
        .then( function() {
          // Reload data table and close dialog                                
          $scope.dataReload();
          $scope.newPbToggle = false;
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
      else if(form.$valid) { //insert user
        Auth.createPhonebook({          
          name: $scope.user.name,
          email: $scope.user.email,
          password: '12345', //default password to 12345
          phone: $scope.user.phone,
          dateAdded: new Date(), //set date addet to current datetime
          notes: $scope.user.notes,
        })
        .then( function() {
          $scope.dataReload();    
          $scope.newPbToggle = false;          
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });

      }
    };
    $scope.removePhonebook = function (user) {
        ngDialog.open({ 
            template: 'app/phonebook/delConfirmTmpl.html',
            className: 'ngdialog-theme-default',
            scope: $scope,
            controller: ['$scope', 'User', function($scope, User) {
                $scope.user = user;
                // controller logic
                $scope.confirmed = function(){
                    User.remove({ id: user._id });
                    angular.forEach($scope.$parent.users, function(u, i) {
                      if (u === user) {
                        $scope.$parent.users.splice(i, 1);
                      }
                    });
                    $scope.$parent.dataReload();   
                    ngDialog.close();                    
                };
                $scope.cancel = function(){
                    ngDialog.close();
                };
            }]
        });
    };
  });
