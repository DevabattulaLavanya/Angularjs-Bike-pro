var myApp = angular.module('myApp');

myApp.controller('BikeController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('Bike loaded...');

	$scope.getBikes = function(){
		$http.get('/api/bike').success(function(response){
			$scope.bike = response;
		});
	}

	$scope.getBike = function(){
		var id = $routeParams.id;
		$http.get('/api/bike/'+id).success(function(response){
			$scope.bike = response;
		});
	}

	$scope.addBike = function(){
		alert("working");
		console.log($scope.bike);
		$http.post('/api/bike/', $scope.bike).success(function(response){
			window.location.href='#/bikes';
		});
	}

	$scope.updateBike = function(){
		var id = $routeParams.id;
		$http.put('/api/bike/'+id, $scope.bike).success(function(response){
			window.location.href='#/bikes';
		});
	}

	$scope.removeBike = function(id){
		$http.delete('/api/bike/'+id).success(function(response){
			window.location.href='#/bikes';
		});
	}
}]);