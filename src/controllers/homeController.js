myApp.controller('homeController', ['$rootScope', '$scope', 'itemsFactory', function($rootScope, $scope, itemsFactory) {
        $scope.currentUser = Parse.User.current();
        $scope.message = 'Home page!';
  
    itemsFactory.getMessages().then(function(messages) {
      $scope.recipes = messages;
    });  
  
    
        if ($scope.currentUser != null) {
            $rootScope.userLoggedIn = true;
        }
  
       // console.log($scope.currentUser.get('username')); gives error, delete
    
    console.log($scope.recipes);
    
        $scope.logOut = function() {
        //  console.log('logged out');  
            User.logOut();
            $rootScope.userLoggedIn = false;
        };
}]);