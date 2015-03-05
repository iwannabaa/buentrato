'use strict';

angular.module('buentratoApp')
  .controller('TriviaItemCtrl', function ($scope, Data, $routeParams) {
  	var triviaLevel = $routeParams.id;
    $scope.trivia = Data.getTrivia(triviaLevel);
    $scope.selectAnswer = function(index) {
    	return index;
    };
  });