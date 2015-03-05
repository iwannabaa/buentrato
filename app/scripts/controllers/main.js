'use strict';

/**
 * @ngdoc function
 * @name buentratoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the buentratoApp
 */
angular.module('buentratoApp')
  .controller('MainCtrl', function ($rootScope, $scope, $location, $facebook, Data) {

	$scope.login = function() {
		$facebook.login().then(function() {
			$scope.getUser();
		});
	};

	$scope.getUser = function() {
		
		var endpoint = '/me?fields=id,name,picture.redirect(false).width(100).height(100).type(square)';

		$facebook.api(endpoint).then( function(response) {
			var user = {
					id 		 : response.id,
					name 	 : response.name,
					picture  : response.picture.data.url
				};
			Data.setUser(user);
			$rootScope.loggedUser = true;
			$location.path( '/menu' );
		});
	};
  });
