'use strict';

angular.module('buentratoApp')
  .controller('TriviaCtrl', function ($scope, Data) {

    $scope.pageClass = 'page-trivia';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Trivia';
    
    $scope.triviaList = Data.getTrivia();
  });