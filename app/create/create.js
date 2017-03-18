'use strict';

angular.module('myApp.create', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/create', {
        templateUrl: 'create/create.html',
        controller: 'CreateCtrl'
    });
}])

.controller('CreateCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.createSubmit = function () {
        $scope.error = '';
        var username = $scope.username,
            email = $scope.email,
            password = $scope.password,
            users = $scope.getUsers(),
            usersLen = 0,
            i = 0;

        if (username != 'undefined' && email != 'undefined' && password != 'undefined') {
            if (!users) {
                users = [];
            }
            usersLen = users.length;
            for (i; i < usersLen; i++) {
                if (users[i].email == email) {
                    $scope.error = 'Email already in use.';
                    break;
                }
            }
            if ($scope.error === '') {
                var user = {
                    username: username,
                    email: email,
                    password: password
                };
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                $location.path('/login');
            }
        } else {
            $scope.error = 'All fields are required.';
        }
    };
    $scope.getUsers = function () {
        return JSON.parse(localStorage.getItem('users'));
    }
    document.getElementById('username').focus();
}]);
