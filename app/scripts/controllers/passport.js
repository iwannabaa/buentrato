'use strict';

angular.module('buentratoApp')
  .controller('passportCtrl', function ($scope) {
    $scope.pageClass = 'page-passport';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Crea tu pasaporte';
  });