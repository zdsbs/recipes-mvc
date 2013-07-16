'use strict';


/* Controllers */
function RecipeCtrl($scope,recipeStorage) {
	$scope.recipes = recipeStorage.get();

	$scope.$watch('recipes',function(){
		recipeStorage.put($scope.recipes);
	},true);

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

function NewRecipeCtrl($scope, $location, $timeout,recipeStorage) {

	$scope.save = function() {
		var recipes = recipeStorage.get();
		recipes.push({name:$scope.newRecipeName});
		recipeStorage.put(recipes);
		$timeout(function() {$location.path("/");});
	}
}