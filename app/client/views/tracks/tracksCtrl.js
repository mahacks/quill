angular.module('reg')
	.controller('TracksCtrl', [
		'$scope',
		'currentUser',
		'settings',
		'UserService',
		function($scope, currentUser, settings, UserService){
			var Settings = settings.data;

			$scope.user = currentUser.data;
		}
	]);