'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
    });
}])

.controller('LoginCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.getUsers = function () {
        return JSON.parse(localStorage.getItem('users'));
    }
    $scope.getCredentials = function () {
        var username = localStorage.getItem('username'),
            email = localStorage.getItem('email'),
            password = localStorage.getItem('password');
        return {
            username: username,
            email: email,
            password: password
        };
    };
    $scope.checkCredentials = function () {
        var users = $scope.getUsers(),
            usersLen = users.length,
            email = $scope.email,
            password = $scope.password,
            userValid = null,
            i = 0;

        for (i; i < usersLen; i++) {
            if (users[i].email == email && users[i].password == password) {
                userValid = i;
                break;
            }
        }
        if (userValid != null) {
            localStorage.setItem('authentication', JSON.stringify([true, users[userValid].username]));
            $location.path('/protected');
        } else {
            $scope.error = "Invalid credentials.";
            $location.path('/login');
        }
    }
    document.getElementById('email').focus();
}]);
