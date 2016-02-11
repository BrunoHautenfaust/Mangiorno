  var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html',
      controller: 'homeController',
      css: 'home'
    })
        .state('home.items',{
            url: '/items',
            templateUrl: 'partials/home.items.html',
            controller: 'itemsController',
            css: 'items'
        })
               .state('itemDetails',{
                  url: '/home/items/:itemId',
                  templateUrl: 'partials/itemDetails.html',
                  controller: 'itemDetailsController',
                  css: 'itemDetails'
                })
    .state('add', {
      url: '/add',
      templateUrl: 'partials/add.html',
      controller: 'addController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      css: 'form'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      css: 'form'
    })
});
