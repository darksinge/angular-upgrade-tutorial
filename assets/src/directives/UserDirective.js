(function() {
    'use strict';
    angular.module('app')
    .directive('user', function() {
        return {
            restrict: "E",
            templateUrl: "src/templates/user.tmpl.html",
            controller: "UserController",
            controllerAs: "ctrl"
        }
    });
})();