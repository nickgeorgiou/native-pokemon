'use strict';

describe('Controller: PokedexCtrl', function () {

  // load the controller's module
  beforeEach(module('nickApp'));

  var PokedexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PokedexCtrl = $controller('PokedexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
