myApp.controller('loginController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
		$scope.message = 'Login page!';
   
    
        $scope.update = function(usr) {
            User.logIn(usr.name, usr.password)
            .then(function() {
                $rootScope.userLoggedIn = true;
                console.log(Parse.User.current().get('username'));
                $location.path('/home');
                $rootScope.$apply();
            }, function(err) {
                alert(err.message);
            })
     
        }
}]);