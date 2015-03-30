'use strict';

angular.module('buentratoApp')
  .controller('PassportShareCtrl', function ($scope, Data, $facebook) {
    // Page setup
    $scope.pageClass = 'page-passport-share';
    $scope.$parent.showNav = false;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Pasaporte';
    $scope.$parent.backPage = 'menu';
    // User info
    $scope.user = Data.getUser();

    $scope.sharePassport = function() {
      $facebook.ui({
        method: 'share',
        href: 'http://iwannabaa.github.io/buentrato/badge/passport'
      }).then(function(){
        // After share
      });
    };
    
  });