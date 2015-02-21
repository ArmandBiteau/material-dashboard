'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
	.controller('MainCtrl', function ($scope, localStorageService) {


		var todosInStore = localStorageService.get('todos');

		$scope.todos = todosInStore || [];

		$scope.$watch('todos', function () {
		  localStorageService.set('todos', $scope.todos);
		}, true);

		console.log($scope);
		
		$scope.$watch('todo.date', function(value)
		{
			if(value)
			{
				$scope.todo.mils = Date.parse($scope.todo.date);
				console.log($scope.todo.mils);
			}
		});
		$scope.addTodo = function () {

			$scope.todos.push($scope.todo);
			// $scope.todos.unshift($scope.todo);
			$scope.todo = '';
		};
		$scope.removeTodo = function (index) {
			$scope.todos.splice(index, 1);
		};

	});
