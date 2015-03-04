'use strict';

/**
 * @ngdoc function
 * @name buentratoApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the menu page
 */
angular.module('buentratoApp')
  .controller('MenuCtrl', function ($scope, Data) {
    $scope.Data = Data;
    $scope.user = Data.getUser();
  });
