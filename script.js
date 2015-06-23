(function(){

var app = angular.module('sampleApp', []);

var mainController = function($scope,$http){

$scope.message = "hello";
$scope.fname = "Ramakrishnan";
$scope.lname = "Sathyavageeswaran";


var onCallComplete = function(response){
	$scope.user = response.data;
};
var onError = function(reason){
	$scope.error = "Could not load details";
};

$http.get("https://api.github.com/users/ramkrishs")
	.then(onCallComplete,onError);


};

app.controller("mainController",mainController);
}());




