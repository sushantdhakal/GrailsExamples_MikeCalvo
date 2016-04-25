angular.module('app').controller('loginController', function($scope, $location, securityService) {
  
  $scope.loginAttempt = {};
  
  $scope.doLogin = function() {
    securityService
      .login($scope.loginAttempt.username, $scope.loginAttempt.password)
      .finally(function(result){
        var currentUser = securityService.currentUser();
        if (currentUser) {
          delete $scope.alerts;
          $location.path('/feed');
        } else {
          $scope.alerts = [{msg: 'Invalid login', type: 'danger'}];
        }
      });
  };
  
});