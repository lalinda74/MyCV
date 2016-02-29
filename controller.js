var application = angular.module('mainApp', ['ngRoute']);

application.controller('app', function($scope) {
	
});

application.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/tab1', {templateUrl: 'tab1.html', controller: HomeCtrl}).
            when('/tab2', {templateUrl: 'tab2.html'}).
            otherwise({redirectTo: '/'});
}]);

function HomeCtrl($scope) {
    console.log("Done");
}
