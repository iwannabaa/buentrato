'use strict';

angular.module('buentratoApp')
  .controller('TriviaEndCtrl', function ($scope, $routeParams, $location, Data) {

    // Params
    var id      = $routeParams.id,
        nextId  = parseInt(id) + 1;

  	// Page setup
    $scope.pageClass = 'page-trivia';
    $scope.$parent.showNav = true;
    $scope.$parent.hasBackBtn = true;
    $scope.$parent.pageTitle = 'Nivel Completado';
    $scope.$parent.backPage = 'trivia';

    $scope.trivia = Data.getTrivia();
    $scope.currentLevel = id;
    $scope.nextTrivia = $scope.trivia[id]; // 0-based index so I use id instead of nextId
    $scope.btnMessage = $scope.currentLevel < $scope.trivia.length ? 'Siguiente Nivel' : 'Volver al Menú';

    $scope.nextLevel = function() {
      if ( id < $scope.trivia.length ) {
        $location.path( '/trivia/' + nextId + '/' + $scope.nextTrivia.slug + '/' );
      } 
      else {
        $location.path( '/menu/');
      }
    };
});