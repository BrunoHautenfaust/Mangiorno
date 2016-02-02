myApp.controller('addController', ['$rootScope', '$scope', function($rootScope, $scope) {
        var Recipe = Parse.Object.extend('Recipe');
    
    
    $scope.MakeArray = function(text) {
        text = text.split(' ');
        var arr = [];
        for (var i=0; i< text.length; i+=1) {
            arr.push(text[i]);
        }
        return arr;
    };
    
    $scope.add = function(m)
    {
        var r = new Recipe();
        r.set('name', m.name);
        r.set('instructions', m.instructions);
        var f = new Parse.File(m.name, { base64: m.img });
        //  console.log(f);
        // console.log(f._source.base64);
        r.set('img', f);
        var a = $scope.MakeArray(m.ingredients);
        r.set('ingredients', a);
        r.save().then(function(){
            console.log('recipe created');
            }, function(err){
                alert(err.message);
            });
    }
}]);

