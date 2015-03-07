'use strict';

angular.module('buentratoApp')
  .controller('TriviaItemCtrl', function ($scope, Data, $routeParams) {
    // Page setup
    $scope.pageClass = 'page-trivia-item';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Trivia Nivel ' + $routeParams.id;
    $scope.$parent.backPage = 'trivia';
    
    $scope.trivia = Data.getTrivia($routeParams.id);
    $scope.selectAnswer = function(questionIndex, answerIndex) {
    	$scope.trivia.questions[questionIndex].selectedAnswer = answerIndex;
    };
  });