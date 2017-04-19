(function() {
    
    'use strict';

    angular.module('app')
    .controller('NavController', NavController);

    NavController.$inject = ['$scope', '$http'];

    function NavController($scope, $http) {
        $scope.links = ['/', '/about', '/user'];

        $scope.searchTerms = "various";

        $scope.searchResults = [];

        $scope.search = function() {
            $http.get('https://ratemybill.com/engine/search?q=' + encodeURIComponent($scope.searchTerms))
            .then(function(res) {
                console.log(res.data.results);
                $scope.searchResults = res.data.results;
            })
            .catch(function(err) {
                console.error(err);
            });
        }

    }

})();