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

app.controller('mainCtrl', function($uibModal, $log, $document, $scope, $location, $http){
	$scope.fileName = 'aboutMe.html';
		$scope.items = ['About Me', 'Resume', 'Projects', 'Skills', 'Contact Me'];

	$scope.changeColor = function(item, bool){
		if(bool === true){
			$scope.personColour = {color: 'red'};
		}else if(bool === false){
			$scope.personColour = {color: 'blue'};
		}
	}

	$scope.testDis = function(index, parentSelector, size ){
		console.log(index);
		if(index === 0)
			$scope.fileName = 'aboutMe.html';
		else if(index ===1){
			      var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'Resume.html',
        size: size,
        appendTo: parentElem,
  
      });
		}
		else if(index === 2){
			$scope.fileName= 'projects.html';
		}
		else if(index ===3){
			$scope.fileName = 'skill.html';
		}
		else if(index ===4){
			$scope.fileName = 'CSE300.html';
		}
		else if(index ===5){
						      var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'contact.html',
        size: size,
        appendTo: parentElem,
  
      });
		}
	}

	$scope.openCover = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'cover.html',
        size: size,
        appendTo: parentElem,
  
      });
	}

	$scope.openUser = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'user.html',
        size: size,
        appendTo: parentElem,
  
      });
	}

	$scope.openLiterature = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'literature.html',
        size: size,
        appendTo: parentElem,
  
      });
	}
	$scope.openResearch = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'research.html',
        size: size,
        appendTo: parentElem,
  
      });

	}
		$scope.openNews = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'news.html',
        size: size,
        appendTo: parentElem,
  
      });
       
	}
	$scope.openNotfb = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'notFB.html',
        size: size,
        appendTo: parentElem,
  
      });
       
	}
	$scope.openEportfolio = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'eportfolio.html',
        size: size,
        appendTo: parentElem,
  
      });
	}
		$scope.openSeawolf = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'Seawolf.html',
        size: size,
        appendTo: parentElem,
  
      });
	}
		$scope.openScrimish = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'scrimish.html',
        size: size,
        appendTo: parentElem,
  
      });
	}
	$scope.openKiosk = function(parentSelector, size){
		var parentElem = parentSelector ? 
        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
       createGroupModal = $uibModal.open({
        animation: $scope.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'kiosk.html',
        size: size,
        appendTo: parentElem,
  
      });
	}

      $scope.sub= function(){
      	$scope.Info = "I have receive your Message!"
      	}
});

app.controller('navCtrl', function($scope, $uibModal){


})