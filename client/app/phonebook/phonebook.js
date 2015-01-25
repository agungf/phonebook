'use strict';

angular.module('phonebookApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/phonebook', {
        templateUrl: 'app/phonebook/phonebook.html',
        controller: 'PhonebookCtrl'
      });
  });
