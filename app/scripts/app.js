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

    $facebookProvider.setAppId('128804311091434');
    // $facebookProvider.setPermissions('user_location');
    $facebookProvider.setVersion('v2.10');

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
      }).when('/passport/create', {
        templateUrl: 'views/passport-create.html',
        controller: 'PassportCreateCtrl'
      }).when('/passport/listen', {
        templateUrl: 'views/passport-listen.html'
      }).when('/passport/believe', {
        templateUrl: 'views/passport-believe.html'
      }).when('/passport/protect', {
        templateUrl: 'views/passport-protect.html'
      }).when('/passport/include', {
        templateUrl: 'views/passport-include.html'
      }).when('/passport/speak-up', {
        templateUrl: 'views/passport-speak.html'
      }).when('/passport/share', {
        templateUrl: 'views/passport-share.html',
        controller: 'PassportShareCtrl'
      })
      .when('/trivia', {
        templateUrl: 'views/trivia.html',
        controller: 'TriviaCtrl'
      })
      .when('/trivia/:id/:slug', {
        templateUrl: 'views/trivia-item.html',
        controller: 'TriviaItemCtrl'
      })
      .when('/trivia/:id/:slug/end-level', {
        templateUrl: 'views/trivia-end.html',
        controller: 'TriviaEndCtrl'
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

    $rootScope.transition = function(direction) {
      $rootScope.isGoingBack = direction === 'back' ? true : false;
    };

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
