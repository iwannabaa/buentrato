'use strict';

angular.module('buentratoApp')
  .controller('SpeakUpCtrl', function ($scope, Data) {
    var contacts = Data.getContacts();
    
    $scope.contacts = contacts;
  });