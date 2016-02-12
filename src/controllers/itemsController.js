myApp.controller('itemsController', ['$rootScope', '$scope', '$location', 'ImageService', 'ItemService', function($rootScope, $scope, $location, imageService, ItemService) {
    
    $scope.limit = 5;
    
    $scope.handleClick = function(data) {
        imageService.prepForBroadcast(data);
    };
        
    $scope.$on('handleBroadcast', function() {
        $rootScope.image = imageService.image;
        $rootScope.imageClicked = true;
        
    });  
    
    
    $scope.setIngredients = function(arr) {
        var string = '';
        for (var i=0; i < arr.length; i+=1) {
            string += arr[i] + (i == arr.length-1 ? ' ' : ', ');
            }
        return string;
    };
        
    var recipes = [];
    var Recipe = Parse.Object.extend('Recipe');
    var query = new Parse.Query(Recipe);
    query.find({
        success: function(results) {
            for(var i=0; i < results.length; i+=1) {
                var item = {};
                item.id = i;
                item.name = results[i].get('name');
                item.instructions = results[i].get('instructions');
                item.img = results[i].get('img');
                item.ingredients = $scope.setIngredients(results[i].get('ingredients'));
                recipes.push(item);
                // console.log(item);
             }
            $scope.recipes = recipes;
            $scope.$apply();
        },
        error: function(error) {
            alert(error.message);
          }
        });
    
    
    $scope.getItem = function(el) {
      ItemService.item = el;
    };

}]);