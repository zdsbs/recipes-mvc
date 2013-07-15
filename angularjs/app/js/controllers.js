'use strict';

/* Controllers */
function RecipeCtrl($scope) {

	$scope.recipes = [
		{name:"ricenbeans",ingredients: ["beans","rice"], instructions: ["mix","boil"]},
		{name:"pasta",ingredients: ["pasta","sauce"], instructions: ["boid","mix"]},
	];

	$scope.addRecipe = function() {
		$scope.recipes.push({name:$scope.newRecipeName});
		$scope.newRecipeName = '';
	};


}