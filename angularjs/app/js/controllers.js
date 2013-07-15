'use strict';

/* Controllers */
function RecipeCtrl($scope) {
	$scope.bob = "Robert";

	$scope.recipes = [
		{name:"ricenbeans",ingredients: ["beans","rice"], instructions: ["mix","boil"]},
		{name:"pasta",ingredients: ["pasta","sauce"], instructions: ["boid","mix"]},
	]


}