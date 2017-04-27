angular.module('sampleApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'NerdCtrl', 'NerdService', 'GeekCtrl', 'GeekService']);
var app = angular.module('sampleApp');

// app.filter('numeric', function() {
//   return function(value) {
//     if (value < 0) {
//       value = '(' + value + ')';
//     }
//     return value;
//   };
// });

// app.filter('customCurrency', ["$filter", function($filter) {
//   return function(amount, currencySymbol) {
//     var currency = $filter('currency');
//
//     if (amount < 0) {
//       return currency(amount, currencySymbol).replace("-", "(") + ')'
//     }
//
//     return currency(amount, currencySymbol);
//   };
// }]);

app.config(['$provide', function($provide) {
  $provide.decorator('$locale', ['$delegate', function($delegate) {
    if ($delegate.id == 'en-us') {
      $delegate.NUMBER_FORMATS.PATTERNS[1].negPre = '(\u00A4';
      $delegate.NUMBER_FORMATS.PATTERNS[1].negSuf = ')';
    }
    return $delegate;
  }]);
}]);
