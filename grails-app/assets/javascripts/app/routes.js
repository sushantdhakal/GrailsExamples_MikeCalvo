angular.module('app')

  // configure the routes
  .config(function ($routeProvider) {

    $routeProvider
      .when('/login', {
        templateUrl: '/app/login.html',
        controller: 'loginController'
      })
      .when('/home/:handle?', {
        templateUrl: '/app/home.html',
        controller: 'homeController'
      })
      .when('/feed', {
        templateUrl: '/app/feed.html',
        controller: 'feedController'
      })
      .when('/profile', {
        templateUrl: '/app/profile.html',
        controller: 'profileController'
      })
      .otherwise({
        redirectTo: '/feed'
      })
  })
    
  // Protect all routes other than login
  .run(function ($rootScope, $location, securityService) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.$$route && next.$$route.originalPath != '/login') {
        if (!securityService.currentUser()) {
          $location.path('/login');
        }
      }
    });
  });


