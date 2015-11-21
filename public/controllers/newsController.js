(function() {
    var NewsController = function($scope, $http) {
    	$http({method: 'GET', url: '/activities'})
    		.success(function(data, status, headers, config) {
			    console.log('todos: ', data );
			    $scope.posts = data;
  			}).error(function(data, status, headers, config) {

		    console.log('Oops and error', data);
		});
    };
    
    NewsController.$inject = ['$scope', '$http'];
    
    angular.module('dtApp').controller('NewsController', NewsController);
    
}());