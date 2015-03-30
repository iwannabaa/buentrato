'use strict';

angular.module('buentratoApp')
  .controller('PassportCreateCtrl', function ($scope) {
    // Page setup
    $scope.pageClass = 'page-passport-create';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Pasaporte del Buentrato';
    $scope.$parent.backPage = 'menu';

    
  });