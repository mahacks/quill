angular.module('reg')
	.controller('TracksCtrl', [
		'$scope',
		'currentUser',
		'settings',
		function($scope, currentUser, settings){
			var Settings = settings.data;

			$scope.user = currentUser.data;
		}
	]);