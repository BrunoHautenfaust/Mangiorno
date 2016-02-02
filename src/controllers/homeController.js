    logOut = function() {
          console.log('logged out');  
            User.logOut();
        };

myApp.controller('homeController', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.currentUser = Parse.User.current();
  /*
    itemsFactory.getMessages().then(function(messages) {
      $scope.recipes = messages;
    });  
  */
        if ($scope.currentUser != null) {
            $rootScope.userLoggedIn = true;
        }
    
  /*
        $scope.logOut = function() {
        //  console.log('logged out');  
            User.logOut();
            $rootScope.userLoggedIn = false;
        };
    */
}]);


