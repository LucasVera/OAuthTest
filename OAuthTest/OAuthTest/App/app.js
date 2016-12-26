'use strict';


angular.module('OAuthApp', [
    'ngResource',
    'ngRoute'
])
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'App/views/login.html',
            controller: 'loginCtrl',
            controllerAs: 'login'
        })
        .otherwise({
            redirectTo: 'App/views/404.html'
        });
});