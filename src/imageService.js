myApp.factory('ImageService', function($rootScope) {
    var imageService = {};
    
    imageService.image = '';

    imageService.prepForBroadcast = function(data) {
        this.image = data.rec.img._url;
        this.broadcastItem();
    };

    imageService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return imageService;
});