'use strict';

angular.module('buentratoApp')
  .controller('SpeakUpCtrl', function ($scope, Data) {
    // Page setup
    $scope.pageClass = 'page-speak-up';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = '¡Denuncia el maltrato!';
    $scope.$parent.backPage = 'menu';

    $scope.contacts = Data.getContacts();
  });