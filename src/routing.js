// var myApp = angular.module('myApp', ['ngRoute']);
//myApp = angular.module('myApp', ['ngRoute']);

myApp.requires.push('ngRoute');

myApp.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
        .when('/home', { 
			templateUrl: 'views/home.html', 
			controller: 'homeController' 
		})
        .when('/register', {
            templateUrl: 'views/register.html', 
			controller: 'registerController'  
        })
        .when('/login', {
            templateUrl: 'views/login.html', 
			controller: 'loginController'  
        })
        .otherwise({redirectTo: '/home'});
	}]); 
/*
app.controller('homeController', function($scope) {
		$scope.message = 'Home page!';
	}); */