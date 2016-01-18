Parse.initialize("ZavOAp10jl3a67GRK5V6n0A8qJPZZJOIXAhyIiCL", "xOshuQt8114ss04m1qYyked904WtuxFlUr3af0Gc");
     
  
  
// var User = new Parse.User(); 

var User = Parse.User;

myApp.controller('registerController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
		$scope.message = 'Registration page!';
        
        $scope.update = function(usr) {
           
         //  User.set('username', usr.name);  // User.get('username')
         //  User.set('password', usr.password);
        
           /* 
            User.signUp(usr.name, usr.password, {   // Error when logging out, can't log in because of "missing user password"
                        success: function(){
                            $rootScope.userLoggedIn = true;
                            console.log('success');
                            $location.path('/home');
                            $rootScope.$apply();
                        },
                        error: function(err){console.log(err.message);}
                        });
          */ 
        User.signUp(usr.name, usr.password)
        .then(function(){
            console.log('user registered');
            $rootScope.userLoggedIn = true;
            $location.path('/home');
            $rootScope.$apply();
        })
        
        };

}]);
