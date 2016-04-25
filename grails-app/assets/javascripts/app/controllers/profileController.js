angular.module('app').controller('profileController', function($scope) {

  $scope.reset = function(form) {
    form.$setPristine();
    form.$setUntouched();
  };
  
});