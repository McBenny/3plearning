'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.login',
    'myApp.create',
    'myApp.protected'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
}]);
