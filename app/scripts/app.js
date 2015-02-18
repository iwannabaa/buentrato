'use strict';

/**
 * @ngdoc overview
 * @name buentratoApp
 * @description
 * # buentratoApp
 *
 * Main module of the application.
 */
angular
  .module('buentratoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      }).when('/passport', {
        templateUrl: 'views/passport.html',
        controller: 'PassportCtrl'
      })
      .when('/trivia', {
        templateUrl: 'views/trivia.html',
        controller: 'TriviaCtrl'
      })
      .when('/speak-up', {
        templateUrl: 'views/speak-up.html',
        controller: 'SpeakUpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
