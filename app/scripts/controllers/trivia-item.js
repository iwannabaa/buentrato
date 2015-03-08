'use strict';

angular.module('buentratoApp')
  .controller('TriviaItemCtrl', function ($scope, Data, $routeParams, $timeout) {
    // Page setup
    $scope.pageClass = 'page-trivia-item';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Trivia Nivel ' + $routeParams.id;
    $scope.$parent.backPage = 'trivia';
    
    $scope.trivia = Data.getTrivia($routeParams.id);
    $scope.index = 0;
    $scope.$questionContainer = $('.question-container');
    $scope.$watch('index', function (newVal) {
        if ( 'number' === typeof newVal ) {
            $scope.question = $scope.trivia.questions[newVal];
        }
    });
     $scope.next = function () {
        if ( $scope.index < $scope.trivia.questions.length - 1 ) {
            $scope.$questionContainer.animate({
                opacity: 0,
                left: -100
            }, function () {
                $scope.index += 1;
                $scope.$apply();
                $scope.$questionContainer.css({
                    left: 100
                }).animate({
                    opacity: 1,
                    left: 0
                });
            });
        }
    };
    $scope.selectAnswer = function(questionIndex, answerIndex) {
    	$scope.question.selectedAnswer = answerIndex;
        $timeout( function(){ 
            $scope.next();
        }, 100);
    };
  });