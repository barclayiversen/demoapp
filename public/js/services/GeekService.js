angular.module('GeekService', []).factory('Geek', ['$http', function($http) {

	var factory = {};

	factory.getData = function(callback) {
		$http({
			method: 'GET',
			url: 'http://localhost:8080/api'
		}).then(function(response) {
			console.log(response)
			response.data.body = angular.fromJson(response.data.body);
			response.data.body.stateGrid = response.data.body.stateGrid.split(',').join('');
			callback(response.data.body);
		}, function(err) {
			console.log('err', err);
			callback(err);
		})
	};

	factory.getRates = function(callback) {
		$http({
			method: 'GET',
			url: 'http://api.fixer.io/latest?base=USD'
		}).then(function(response) {
			console.log(response);
			callback(response);
		}, function(err) {
			console.log(err);
			callback(err);
		})
	};

	return factory;

}]);
