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

    $scope.goToTrivia = function(index, goTo) {
      if ( index === 0 || $scope.checkPrevious(index) ) {
        $rootScope.transition('forward');
        $location.path(goTo);
      }
    };

    $scope.checkPrevious = function(index) {
      var previousTrivia = index - 1;
      if ( index === 0 || $scope.triviaList[previousTrivia].isDone ) {
        return true;
      }
      return false;
    };
  });
