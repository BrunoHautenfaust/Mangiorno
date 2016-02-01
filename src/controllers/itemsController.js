myApp.controller('itemsController', ['$rootScope', '$scope', '$location', 'itemsFactory', function($rootScope, $scope, $location, itemsFactory) {
		//$scope.message = 'Login page!';
   
    itemsFactory.getMessages().then(function(messages) {
      $scope.recipes = messages;
    });  
    
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