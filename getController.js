var app = angular.module('magicApp');

app.controller('getController', ["$scope", "answerFactory", function($scope, answerFactory){

	$scope.save = function(){
		answerFactory.saveQuestion($scope.questionAsked);
	
		};

}]);