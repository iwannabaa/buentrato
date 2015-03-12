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
    console.log($scope.index);
     $scope.next = function () {
        console.log('Next started');
        console.log('verify if index: ' + parseInt($scope.index) + ' < total questions ' + parseInt($scope.trivia.questions.length - 1) );
        if ( $scope.index < $scope.trivia.questions.length - 1 ) {
            console.log('start animation');
            $scope.$questionContainer.animate({
                opacity: 0,
                left: -100
            },2000 , function () {
                console.log('after animation');
                console.log($scope.index);
                console.log('update index');
                $scope.$apply(function(){
                    $scope.index += 1;
                    $scope.answerStatus = null;
                });
                console.log($scope.index);
                console.log('start 2nd animation');
                $scope.$questionContainer.css({
                    left: 100
                }).animate({
                    opacity: 1,
                    left: 0
                }, 2000, function(){
                    console.log('End 2nd animation');
                });
            });
        } else {
            $location.path( '/trivia/' + id + '/' + slug + '/' + 'end-level' );
        }
    };
    $scope.selectAnswer = function(questionIndex, answerIndex) {
        console.log('Answer selected');
    	$scope.question.selectedAnswer = answerIndex;
        // Verify correct
        if ( $scope.question.correctAnswer === answerIndex ) {
            // Correct
            $scope.answerStatus = 1;
            // Next question
            $timeout( function(){ 
                console.log('Next fired');
                $scope.next();
            }, 2000);
        } else {
            // Wrong answer
            $scope.answerStatus = 0;
        }
    };
  });