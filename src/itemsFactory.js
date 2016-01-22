myApp.factory('itemsFactory', function($q, $timeout){

    var recipes = [];
    
    var Recipe = Parse.Object.extend('Recipe');
    var query = new Parse.Query(Recipe);
    query.find({
        success: function(results) {
             /*
                customers = results.map(function(obj){
                    return {name: obj.get('name'), instructions: obj.get('instructions'), parseObject: obj }
                });
           */
            for(var i=0; i < results.length; i+=1) {
                var item = {};
                item.name = results[i].get('name');
                item.instructions = results[i].get('instructions');
                item.img = results[i].get('img');
                item.ingredients = results[i].get('ingredients');
                recipes.push(item);
                console.log(item);
             }
        },
        error: function(error) {
            console.log(error.message);
          }
        });

      var getMessages = function() {
        var deferred = $q.defer();
        $timeout(function() {
          deferred.resolve(recipes);
        }, 2000);
      
        return deferred.promise;
    };
    
    return {
        getMessages: getMessages
    };
    
});
