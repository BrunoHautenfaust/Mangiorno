Parse.initialize("ZavOAp10jl3a67GRK5V6n0A8qJPZZJOIXAhyIiCL", "xOshuQt8114ss04m1qYyked904WtuxFlUr3af0Gc");
  
// var User = new Parse.User(); 

var User = Parse.User;

myApp.controller('registerController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
        $scope.update = function(usr) {
          
        User.signUp(usr.name, usr.password)
        .then(function(){
            console.log('user registered');
            $rootScope.userLoggedIn = true;
            $location.path('/home');
            $rootScope.$apply();
        })
        
        };

}]);
