(function() {
    
    var app = angular.module('dtApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
       $routeProvider
            .when('/news', 
                {
                   controller:'NewsController',
                   templateUrl:'/views/newsfeed.html'
                })
            .when('/user', 
                {
                   controller:'UserController',
                   templateUrl:'/views/user.html'
                })
            .otherwise({redirectTo:'/'});
        });

}());