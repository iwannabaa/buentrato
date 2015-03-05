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
    'ngTouch',
    'ngFacebook'
  ])
  .config(function ($routeProvider, $facebookProvider) {

    $facebookProvider.setAppId('1552541561701563');
    // $facebookProvider.setPermissions('user_location');
    $facebookProvider.setVersion('v2.2');

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
      .when('/trivia/:id/:slug', {
        templateUrl: 'views/trivia-item.html',
        controller: 'TriviaItemCtrl'
      })
      .when('/speak-up', {
        templateUrl: 'views/speak-up.html',
        controller: 'SpeakUpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run( function($rootScope, $location) {
    // Load the facebook SDK asynchronously
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = '//connect.facebook.net/en_US/sdk.js';
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

    // register listener to watch route changes
    $rootScope.$on( '$routeChangeStart', function(event, next) {
      if ( ! $rootScope.loggedUser && next.templateUrl !== 'views/main.html' ) {
        // no logged user, not going to #login, we should redirect to #main
        $location.path( '/' );
      }
      if ( $rootScope.loggedUser && next.templateUrl === 'views/main.html' ) {
        // no logged user, not going to #login, we should redirect to #main
        $location.path( '/menu' );
      }         
    });
  });
