logOut = function() {
          console.log('logged out');  
          User.logOut();
          location.reload();
        };

myApp.controller('homeController', ['$rootScope', '$scope', function($rootScope, $scope) {
       
        $scope.currentUser = Parse.User.current();

        if ($scope.currentUser != null) {
            $rootScope.userLoggedIn = true;
        }
    
    $scope.hide = function() {
           $rootScope.imageClicked = false;
    };
}]);


