(function() {
    angular.module('app', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'src/templates/index.html'
        })
        .when('/about', {
            templateUrl: "src/templates/about.html"
        })
        .when('/user', {
            templateUrl: 'src/templates/user.html'
        })
        .otherwise({
            templateUrl: 'src/templates/404.html'
        });

        $locationProvider.html5Mode(true);

    });
})();