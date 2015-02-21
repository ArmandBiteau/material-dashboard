'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'timer',
    'ngTagsInput'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/todo', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/inspiration', {
        templateUrl: 'views/inspiration.html',
        controller: 'InspirationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      // use the HTML5 History API
      // $locationProvider.html5Mode(true);
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo', {
      'default': '500'
    })
    // If you specify less than all of the keys, it will inherit from the
    // default shades
    .accentPalette('pink', {
      'default': '500' // use shade 200 for default, and keep all other shades the same

    });
  });