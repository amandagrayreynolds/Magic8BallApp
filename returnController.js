var app = angular.module('magicApp');

app.controller("returnController", function($scope, answerFactory){
	$scope.displayAnswer = answerFactory.getQuestion();
	
});



