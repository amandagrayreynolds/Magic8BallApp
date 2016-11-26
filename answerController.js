var app = angular.module('magicApp',[]);

app.controller('answerController', function($scope){
  $scope.answers=["No, but soon", "Sure thing bro","Of Course"];
  $scope.finalAnswer=[];

  $scope.addAnswer=function(){
  	$scope.randomAnswer = $scope.answers[Math.floor(Math.random()*$scope.answers.length)];
  	$scope.finalAnswer.push(
	  	{text: $scope.randomAnswer,
	  	}
	  	);
 }