'use strict';

/**
 * @ngdoc function
 * @name buentratoApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the menu page
 */
angular.module('buentratoApp')
  .controller('MenuCtrl', function ($scope, Data) {

    $scope.pageClass = 'page-menu';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = false;
    $scope.$parent.pageTitle = '¡Bienvenido!';
    
    $scope.Data = Data;
    $scope.user = Data.getUser();
  });
