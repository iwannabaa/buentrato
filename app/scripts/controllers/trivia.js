'use strict';

angular.module('buentratoApp')
  .controller('TriviaCtrl', function ($scope, Data) {
    $scope.variable = 'value';
    $scope.triviaList = Data.getTrivia();
  });