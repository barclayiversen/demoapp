angular.module('GeekCtrl', []).controller('GeekController', function($scope, Geek) {

  $scope.tagline = 'The square root of life is pi!';
  $scope.data;
	$scope.rates;
	$scope.exchangeRate;

  Geek.getData(function(res) {
    var dataParsed = angular.fromJson(res);
    $scope.data = dataParsed;
  });



  Geek.getRates(function(res) {
    console.log('rates', res);
    fx.rates = res.data.rates;
		$scope.rates = fx.rates;
		console.log('fx', fx.rates);
    // var rate = fx(1).from("USD").to("GBP")
    // alert("£1 = $" + rate.toFixed(4))
  });

  var demo = function(data) {

  };

  $scope.getRates = function() {

  };

	$scope.convert = function() {
		// console.log($scope.exchangeRate);
	}

});
