'use strict';

/**
 * @ngdoc function
 * @name buentratoApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the menu page
 */
angular.module('buentratoApp')
  .controller('MenuCtrl', function ($rootScope, $scope, Data) {
  	// Page setup
    $scope.pageClass = 'page-menu';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = false;
    $scope.$parent.pageTitle = '¡Bienvenido!';
    // User info
    $scope.user = Data.getUser();
  });
