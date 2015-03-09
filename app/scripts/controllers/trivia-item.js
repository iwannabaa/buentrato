'use strict';

angular.module('buentratoApp')
  .controller('TriviaItemCtrl', function ($scope, Data, $routeParams, $timeout, $location) {
    // Params
    var id      = $routeParams.id,
        slug    = $routeParams.slug;

    // Page setup
    $scope.pageClass = 'page-trivia-item';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Nivel ' + id;
    $scope.$parent.backPage = 'trivia';
    
    $scope.trivia = Data.getTrivia(id);
    $scope.index = 0;
    $scope.answerStatus = null;
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
                $scope.answerStatus = null;
                $scope.$apply();
                $scope.$questionContainer.css({
                    left: 100
                }).animate({
                    opacity: 1,
                    left: 0
                });
            });
        } else {
            $location.path( '/trivia/' + id + '/' + slug + '/' + 'end-level' );
        }
    };
    $scope.verifyAnswer = function(){

    };
    $scope.selectAnswer = function(questionIndex, answerIndex) {
    	$scope.question.selectedAnswer = answerIndex;
        // Verify correct
        if ( $scope.question.correctAnswer === answerIndex ) {
            $scope.answerStatus = 1;
            $timeout( function(){ 
                $scope.next();
            }, 200);
        } else {
            $scope.answerStatus = 0;
        }
    };
  });