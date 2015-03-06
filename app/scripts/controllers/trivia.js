'use strict';

angular.module('buentratoApp')
  .controller('TriviaCtrl', function ($scope, Data) {
    $scope.triviaList = Data.getTrivia();
    console.log($scope.triviaList);
  });