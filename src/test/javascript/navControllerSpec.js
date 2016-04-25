describe('navController', function () {
  beforeEach(module('app'));

  var $controller;
  var $rootScope;
  var $scope;

  var currentUser = undefined;

  var securityService = {
    currentUser: function () {
      return currentUser;
    },

    logout: function () {
    }
  };

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $scope = {};
  }));


  describe('$scope.showNav', function () {

    beforeEach(function () {
      spyOn(securityService, 'currentUser');
      $controller('navController', {$scope: $scope, $rootScope: $rootScope, securityService: securityService});
    });

    it('defaults the scope showNav to be false with no current user', function () {
      expect(securityService.currentUser).toHaveBeenCalled();
      expect($scope.showNav).toBeFalsy();
    });

    it('when the current user changes, showNav does too', function () {
      $rootScope.currentUser = {name: 'Dude'};
      $rootScope.$digest();
      expect($scope.showNav).toBe(true);
    });
  });

  describe('logout', function () {

    beforeEach(function () {
      $controller('navController', {$scope: $scope, $rootScope: $rootScope, securityService: securityService});
    });

    it('is defined when scope initialized', function () {
      expect($scope.logout).toBeDefined();
    });

    it('calls securityService logout', function () {
      spyOn(securityService, 'logout');
      var fakeEvent = {
        stopPropagation: function () {
        }
      };
      spyOn(fakeEvent, 'stopPropagation');
      $scope.logout(fakeEvent);
      expect(securityService.logout).toHaveBeenCalled();
      expect(fakeEvent.stopPropagation).toHaveBeenCalled();
    });

  });
});