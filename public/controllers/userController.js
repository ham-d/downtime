(function() {


    
    var UserController = function($scope, $http) {
      	console.log('here in create');

      	$scope.create = function(){
	      	console.log('hostName', $scope.hostName);
	      	console.log('activityTitle', $scope.activityTitle);
	      	console.log('location', $scope.location);
	      	$http({method: 'POST',url:'/activities',headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    			transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    },data: {host: $scope.hostName, name: $scope.activityTitle, location: $scope.location}})
	      	.success(function () {});
	      };
    };

    
    UserController.$inject = ['$scope', '$http'];
    
    angular.module('dtApp').controller('UserController', UserController);
    
}());