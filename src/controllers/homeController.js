    logOut = function() {
          console.log('logged out');  
            User.logOut();
        };

myApp.controller('homeController', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.currentUser = Parse.User.current();

        if ($scope.currentUser != null) {
            $rootScope.userLoggedIn = true;
        }
    
    $scope.hide = function() {
           $rootScope.imageClicked = false;
    };
       
  /*
        $scope.logOut = function() {
        //  console.log('logged out');  
            User.logOut();
            $rootScope.userLoggedIn = false;
        };
    */
}]);


