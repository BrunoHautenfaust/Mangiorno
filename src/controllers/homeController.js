myApp.controller('homeController', ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.currentUser = Parse.User.current();
        $scope.message = 'Home page!';
    
        console.log($scope.currentUser);
    
        $scope.logOut = function() {
        //  console.log('logged out');  
            User.logOut();
            $rootScope.userLoggedIn = false;
        };
}]);
