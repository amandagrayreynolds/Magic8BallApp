(function() {
var app = angular.module("magicApp", ["ngRoute"]);

app.config(function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "views/question.html",
        controller: 'getController'
      
    });
    $routeProvider.when("/answer", {
        templateUrl: "views/answer.html",
        controller: 'returnController'
      
    });

});

})();