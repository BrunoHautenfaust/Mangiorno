myApp.controller('addController', ['$state','$rootScope', '$scope', '$timeout', function($state, $rootScope, $scope, $timeout) {
     
    var Relocate = function() {
        if (!$rootScope.userLoggedIn) {
            $state.go('home');
        }
     };
    
    var MessageToFalse = function() {
     $scope.successMessage = false;
        $scope.$apply();  
   };
    
    var Recipe = Parse.Object.extend('Recipe');

    var MakeArray = function(text) {
        text = text.split(',');
        var arr = [];
        for (var i=0; i< text.length; i+=1) {
            arr.push(text[i]);
        }
        return arr;
    };
    
    var checkRecipe = function(obj) {
        if ((obj.name != undefined || obj.name != ' ')
            && (obj.instructions != undefined || obj.instructions != ' ')) {
            $scope.added = true;
            return true;
        } else {
            return false;
        }
    };
    
    $scope.add = function(m) {
        var r = new Recipe();
              //  console.log(check(r));
        r.set('name', m.name);
        r.set('instructions', m.instructions);
        var f = new Parse.File(m.name, { base64: m.img });
        if (f._source.base64 == undefined) {
            f._source.base64 = emptyDishImg;
        }
        r.set('img', f);
        var a = MakeArray(m.ingredients);
        r.set('ingredients', a);
        
        checkRecipe(r);
        /*
        console.log(r.get('name'));
        console.log(typeof(r.get('name')));
        console.log(r.get('instructions'));
        console.log(typeof(r.get('instructions')));
        console.log(r.get('ingredients'));
        */
        
        r.save().then(function(){
        $scope.added = false;
        $scope.successMessage = true;
        $scope.$apply();
        $timeout(MessageToFalse, 1000);
        }, function(err){
            alert(err.message);
        });
    }
    Relocate();
}]);

