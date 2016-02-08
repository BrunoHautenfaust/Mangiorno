myApp.factory('ImageService', function($rootScope) {
    var imageService = {};
    
    imageService.image = '';

    imageService.prepForBroadcast = function(data) {
        this.image = data.rec.img._url;
        this.broadcastItem();
    };
    
    imageService.prepForBroadcastAgain = function(data) {
        this.image = data.item.img;
        this.broadcastItem();
    };

    imageService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return imageService;
});