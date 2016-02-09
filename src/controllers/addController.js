myApp.controller('addController', ['$state','$rootScope', '$scope', function($state, $rootScope, $scope, message) {
     
    var relocate = function() {
        if (!$rootScope.userLoggedIn) {
            $state.go('home');
        }
     };
    
    var Recipe = Parse.Object.extend('Recipe');
    
    $scope.MakeArray = function(text) {
        text = text.split(' ');
        var arr = [];
        for (var i=0; i< text.length; i+=1) {
            arr.push(text[i]);
        }
        return arr;
    };
    
    var checkRecipe = function(obj) {
        if ((obj.name != undefined || obj.name != '')
            && (obj.instructions != undefined || obj.instructions != '')) {
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
        //  console.log(f);
        // console.log(f._source.base64);
        r.set('img', f);
        var a = $scope.MakeArray(m.ingredients);
        r.set('ingredients', a);
        checkRecipe(r);
        r.save().then(function(){
            $scope.added = false;
            $scope.$apply();
            alert('recipe created');
            }, function(err){
                alert(err.message);
            });
    }
    relocate();
}]);

