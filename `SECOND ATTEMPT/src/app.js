  var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .state('home.items',{
        url: '/items',
        templateUrl: 'partials/home.items.html',
        controller: 'itemsController'
        
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'loginController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'partials/register.html',
      controller: 'registerController'
    })
});