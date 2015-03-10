'use strict';

angular.module('buentratoApp')
  .controller('TriviaEndCtrl', function ($scope) {
  	// Page setup
    $scope.pageClass = 'page-trivia';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = false;
    $scope.$parent.pageTitle = 'Nivel Completado';
    $scope.$parent.backPage = 'menu';
});