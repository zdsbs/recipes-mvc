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

	$scope.delete = function(toDelete) {
		var oldRecipes = $scope.recipes;
		$scope.recipes = [];
		angular.forEach(oldRecipes,function(recipe){
			if(recipe.name != toDelete.name) {
				$scope.recipes.push(recipe);
			}
		});
	};


}