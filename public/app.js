var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BikeController',
		templateUrl: 'views/bikes.html'
	})
	.when('/bikes', {
		controller:'BikeController',
		templateUrl: 'views/bikes.html'
	})
	.when('/bike/details/:id',{
		controller:'BikeController',
		templateUrl: 'views/bike_details.html'
	})
	.when('/bike/add',{
		controller:'BikeController',
		templateUrl: 'views/add_bike.html'
	})
	.when('/bike/edit/:id',{
		controller:'BikeController',
		templateUrl: 'views/edit_bike.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});