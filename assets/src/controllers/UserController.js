(function() {

    'use strict';

    angular.module('app')
    .controller('UserController', UserController);

    UserController.$inject = ['$scope', '$http'];

    function UserController($scope, $http) {
        $scope.user = {
            name: "Craig",
            id: 952632,
            password: "password",
            age: 27
        }
    }

})();