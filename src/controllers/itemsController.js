myApp.controller('itemsController', ['$rootScope', '$scope', '$location', 'ImageService', function($rootScope, $scope, $location, imageService) {
    
    $scope.handleClick = function(data) {
        imageService.prepForBroadcast(data);
    };
        
    $scope.$on('handleBroadcast', function() {
       $rootScope.image = imageService.image;
        $rootScope.imageClicked = true;
        
    });  
    
    
		//$scope.message = 'Login page!';
    console.log('In items controller');
   
    $scope.setIngredients = function(arr) {
        var string = '';
        for (var i=0; i < arr.length; i+=1) {
            string += arr[i] + (i == arr.length-1 ? ' ' : ', ');
            }
        return string;
    };
        
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
              //  item.ingredients = results[i].get('ingredients');
                item.ingredients = $scope.setIngredients(results[i].get('ingredients'));
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