myApp.controller('itemDetailsController', ['$scope', 'ItemService', function($scope, ItemService) {
    var recepta = ItemService.item; 
    
    $scope.item = {
        name: recepta.rec.name,
        instructions: recepta.rec.instructions,
        ingredients: recepta.rec.ingredients,
    };
    
    if (!recepta.rec.img) {
        $scope.item.img = recepta.rec.name;
    } else {
        $scope.item.img = recepta.rec.img._url;
    }
    
    $scope.handleClick = function(data) {
        $scope.imageClicked = true;
        $scope.image = data.item.img;
    };
    
     $scope.hide = function() {
           $scope.imageClicked = false;
    };
    
     
}]);
