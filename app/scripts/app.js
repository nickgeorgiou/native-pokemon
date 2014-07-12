'use strict';

angular
    .module('nickApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/pokedex', {
              templateUrl: 'views/pokedex.html',
              controller: 'PokedexCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });