(function() {
    
    var NewsController = function($scope, $http) {
        $http.get('data/posts.json').success(function(data) {
            $scope.posts = data;
        });
    };
    
    
    NewsController.$inject = ['$scope', '$http'];
    
    angular.module('dtApp').controller('NewsController', NewsController);
    
}());