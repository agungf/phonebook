'use strict';

describe('Controller: PhonebookCtrl', function () {

  // load the controller's module
  beforeEach(module('phonebookApp'));

  var PhonebookCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhonebookCtrl = $controller('PhonebookCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
