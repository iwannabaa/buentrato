'use strict';

angular.module('buentratoApp')
  .controller('TriviaCtrl', function ($scope, Data) {
  	// Page setup
    $scope.pageClass = 'page-trivia';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Trivia';
    $scope.$parent.backPage = 'menu';
    
    $scope.triviaList = Data.getTrivia();
  });