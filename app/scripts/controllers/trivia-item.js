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
    $scope.$watch('index', function (newVal) {
        if ( 'number' === typeof newVal ) {
            $scope.question = $scope.trivia.questions[newVal];
        }
    });
    $scope.next = function () {
        if ( $scope.index < $scope.trivia.questions.length - 1 ) {
            $('.question-container').animate({
                opacity: 0,
                left: -100
            }, function () {
                $scope.$apply(function(){
                    $scope.index += 1;
                    $scope.answerStatus = null;
                });
                $('.question-container').css({
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
    $scope.selectAnswer = function(questionIndex, answerIndex) {
    	$scope.question.selectedAnswer = answerIndex;
        // Verify correct
        if ( $scope.question.correctAnswer === answerIndex ) {
            // Correct
            $scope.answerStatus = 1;
            // Next question
            $timeout( function(){
                $scope.next();
            }, 200);
        } else {
            // Wrong answer
            $scope.answerStatus = 0;
        }
    };
  });