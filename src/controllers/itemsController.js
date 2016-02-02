myApp.controller('itemsController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
		//$scope.message = 'Login page!';
 
    console.log('In items controller');
    
    // TEST QUERY
    var recipes = [];
    var Recipe = Parse.Object.extend('Recipe');
    var query = new Parse.Query(Recipe);
    query.find({
        success: function(results) {
            for(var i=0; i < results.length; i+=1) {
                var item = {};
                item.name = results[i].get('name');
                item.instructions = results[i].get('instructions');
                item.img = results[i].get('img');
                item.ingredients = results[i].get('ingredients');
                recipes.push(item);
                console.log(item);
             }
            $scope.recipes = recipes;
            $scope.$apply();
        },
        error: function(error) {
            console.log(error.message);
          }
        });
    
    /*
    var getMessages = function() {
        var deferred = $q.defer();
        $timeout(function() {
          deferred.resolve(recipes);
        }, 2000);
        
        // console.log(typeof recipes); // object
        return deferred.promise;
    };
    $scope.recipes = getMessages();
    */
    
   /*
  itemsFactory.getMessages().then(function(messages) {
          $scope.recipes = messages;
      console.log('Im in!'); // works every time          >>>  Update recipes through addController
  });  
  */

}]);