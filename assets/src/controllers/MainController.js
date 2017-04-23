(function() {
    angular.module('app')
    .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {

        $scope.title = "Test Application";

    }

})();