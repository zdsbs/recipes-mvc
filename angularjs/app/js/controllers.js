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
	$scope.recipe = {name:"",steps:[],ingredients:[]}
	$scope.save = function() {
		var recipes = recipeStorage.get();
		recipes.push($scope.recipe);
		recipeStorage.put(recipes);
		$timeout(function() {$location.path("/");});
	}

	$scope.addStep = function() {
		$scope.recipe.steps.push({step:""});
	}
}

function findRecipe(recipes,name) {
	for(var i = 0; i < recipes.length; i++) {
		if(recipes[i].name == name) {
			 return recipes[i];
		}
	}
}

function EditRecipeCtrl($scope, $routeParams, $location, $timeout,recipeStorage) {
	var recipes = recipeStorage.get();
	$scope.recipe = findRecipe(recipes,$routeParams.recipeName);

	$scope.save = function() {
		recipeStorage.put(recipes);
		$timeout(function() {$location.path("/");});
	}

	$scope.addStep = function() {
		$scope.recipe.steps.push({step:""});
	}
}