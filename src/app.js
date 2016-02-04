  var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /home
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
        controller: 'itemsController',
      css: 'items'
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
})
.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);