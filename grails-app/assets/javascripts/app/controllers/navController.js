angular.module('app').controller('navController',
  
  function ($scope, $rootScope, securityService) {
    $scope.showNav = !!securityService.currentUser();

    $rootScope.$watch('currentUser', function (currentUser) {
      $scope.showNav = !!currentUser;
    });

    $scope.logout = function ($event) {
      $event.stopPropagation();
      securityService.logout();
    }
  });