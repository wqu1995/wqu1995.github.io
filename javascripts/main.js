var app = angular.module('myapp', ['ngRoute','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider
		.when("/", {
			templateUrl: "index.html",
			controller: "mainCtrl"
		});
}]);

app.controller('coverCtrl', function($scope, $uibModal){
	$scope.dataToShare=[];

	$scope.hide = function(){
		$scope.hideCover = true;
	}
});

app.controller('mainCtrl', function($scope, $uibModal){
	console.log('hi');
});

app.controller('navCtrl', function($scope, $uibModal){

	$scope.items = ['About Me', 'Resume', 'Projects', 'CSE 300', 'Contact Me'];

	$scope.changeColor = function(item, bool){
		if(bool === true){
			$scope.personColour = {color: 'red'};
		}else if(bool === false){
			$scope.personColour = {color: 'blue'};
		}
	}
})