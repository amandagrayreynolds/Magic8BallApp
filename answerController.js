var app = angular.module('magicApp');

app.controller('answerController', function($scope){
  $scope.answers=["No, but soon", "Sure thing bro","Of Course", "Never in a million years", "As uncertain as America", 
  "Ask again later", "Don't count on it", "Sources say No", "Pack your bags now"];

  $scope.init=function(){
   $scope.randomAnswer = $scope.answers[Math.floor(Math.random()*$scope.answers.length)];
};

$scope.again=function(){
	 $scope.randomAnswer = $scope.answers[Math.floor(Math.random()*$scope.answers.length)];
	};
});