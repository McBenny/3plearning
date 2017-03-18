'use strict';

angular.module('myApp.protected', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/protected', {
        templateUrl: 'protected/protected.html',
        controller: 'ProtectedCtrl'
    });
}])

.controller('ProtectedCtrl', ['$scope', '$location', function($scope, $location) {
    var authentication = JSON.parse(localStorage.getItem('authentication'));
    if (!authentication) {
        $location.path('/login');
    } else {
        $scope.username = authentication[1];
        $scope.logout = function () {
            localStorage.removeItem('authentication');
            $location.path('/login');
        }
    }
}]);