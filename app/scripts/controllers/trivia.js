'use strict';

angular.module('buentratoApp')
  .controller('TriviaCtrl', function ($scope, Data, $location, $rootScope) {
  	// Page setup
    $scope.pageClass = 'page-trivia';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Trivia';
    $scope.$parent.backPage = 'menu';
    
    $scope.triviaList = Data.getTrivia();

    $scope.validateTrivia = function(index, goTo) {
      var previousTrivia = index - 1;

      if ( index === 0 || $scope.triviaList[previousTrivia].isDone ) {
        $rootScope.transition('forward');
        $location.path(goTo);
      } else {
        return false;
      }
    };
  });