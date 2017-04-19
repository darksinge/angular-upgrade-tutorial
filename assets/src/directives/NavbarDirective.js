(function() {
    'use strict';
    angular.module('app')
    .directive('navbar', function() {
        return {
            restrict: "E",
            templateUrl: "src/templates/navbar.tmpl.html",
            controller: "NavController",
            controllerAs: "ctrl"
        }
    });
})();