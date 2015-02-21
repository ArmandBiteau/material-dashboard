'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:InspirationCtrl
 * @description
 * # InspirationCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('InspirationCtrl', function ($scope, $mdDialog, $http, localStorageService, $sce ) {

    var inspirationsInStore = localStorageService.get('inspirations');
    $scope.inspirations = inspirationsInStore || [];
    $scope.$watch('inspirations', function () {
      localStorageService.set('inspirations', $scope.inspirations);
    }, true);


    $scope.loadTags = function() {
        // return $scope.tags;
    };
    $scope.addInspi = function () {

        // $scope.inspirations.push($scope.inspi);
        $scope.inspirations.unshift($scope.inspi);
        $scope.inspi='';

    };
    $scope.removeInspi = function (index) {
        $scope.inspirations.splice(index, 1);
    };
    $scope.trustUrl = function(url) {
        return $sce.trustAsResourceUrl(url);
    };
  
  $scope.showConfirm = function(ev, index) {
    var confirm = $mdDialog.confirm()
      .title('Sure to delete this inspiration?')
      .content('Maybe not...')
      .ariaLabel('Lucky boy')
      .ok('Yes do it!')
      .cancel('You\'re right, keep it !')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
        $scope.removeInspi(index);
    }, function() {
    });
  };

});



