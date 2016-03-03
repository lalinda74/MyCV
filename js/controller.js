var application = angular.module('mainApp', ['ngRoute']);

application.controller('app', function($rootScope, $scope) {
    
        $rootScope.imageUrlProfile = 'images/profile-icon.png';
        $rootScope.imageUrlWork = 'images/exp-icon.png';
        $rootScope.imageUrlEdu = 'images/edu-icon.png';
        $rootScope.imageUrlProject = 'images/project-icon.png';
        $rootScope.imageUrlContact = 'images/phone-icon.png';
	
});

application.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/tab1', {templateUrl: 'tab1.html', controller: ProfileCtrl}).
            when('/tab2', {templateUrl: 'tab2.html', controller: WorkCtrl}).
            when('/tab3', {templateUrl: 'tab3.html', controller: EduCtrl}).
            when('/tab4', {templateUrl: 'tab4.html', controller: ProjectCtrl}).
            when('/', {templateUrl: 'openingTab.html'}).
            otherwise({redirectTo: '/'});
}]);

function ProfileCtrl($rootScope) 
{
    $rootScope.imageUrlProfile = 'images/profile-icon-clicked.png';
    $rootScope.imageUrlWork = 'images/exp-icon.png';
    $rootScope.imageUrlEdu = 'images/edu-icon.png';
    $rootScope.imageUrlProject = 'images/project-icon.png';
    $rootScope.imageUrlContact = 'images/phone-icon.png';
}

function WorkCtrl($rootScope) 
{
    $rootScope.imageUrlProfile = 'images/profile-icon.png';
    $rootScope.imageUrlWork = 'images/exp-icon-clicked.png';
    $rootScope.imageUrlEdu = 'images/edu-icon.png';
    $rootScope.imageUrlProject = 'images/project-icon.png';
    $rootScope.imageUrlContact = 'images/phone-icon.png';
}

function EduCtrl($rootScope) 
{
    $rootScope.imageUrlProfile = 'images/profile-icon.png';
    $rootScope.imageUrlWork = 'images/exp-icon.png';
    $rootScope.imageUrlEdu = 'images/edu-icon-clicked.png';
    $rootScope.imageUrlProject = 'images/project-icon.png';
    $rootScope.imageUrlContact = 'images/phone-icon.png';
}

function ProjectCtrl($rootScope) 
{
    $rootScope.imageUrlProfile = 'images/profile-icon.png';
    $rootScope.imageUrlWork = 'images/exp-icon.png';
    $rootScope.imageUrlEdu = 'images/edu-icon-clicked.png';
    $rootScope.imageUrlProject = 'images/project-icon-clicked.png';
    $rootScope.imageUrlContact = 'images/phone-icon.png';
}
