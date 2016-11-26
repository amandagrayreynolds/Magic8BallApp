var app = angular.module('magicApp');

app.factory('answerFactory', function(){
	var completeAnswer = "";
	
	return {

		saveQuestion: function (questionAsked){
			completeAnswer = questionAsked;
		},
		

		getQuestion: function(){
			return completeAnswer;
		},

	};
});