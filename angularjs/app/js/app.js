'use strict';

/* App Module */

angular.module('app',[]).
	factory('recipeStorage', function () {
		var STORAGE_ID = 'recipe-mvc-angularjs';

		return {
			get: function () {
				return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			},

			put: function (recipes) {
				localStorage.setItem(STORAGE_ID, JSON.stringify(recipes));
			}
		};
	}).
	config(['$routeProvider',function($routeProvider){
		$routeProvider.
			when('/',{controller:RecipeCtrl, templateUrl:'list.html'}).
			when('/new',{controller:NewRecipeCtrl, templateUrl:'new.html'}).
			otherwise({redirectTo:'/'});
	}]);