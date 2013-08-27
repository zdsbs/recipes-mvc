'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
	var recipeCtrl,newRecipeCtrl,editRecipeCtrl, scope;
	beforeEach(module('app'));

	beforeEach(module(function($provide){
		$provide.value('recipeStorage', {
			storage: [],
			get: function() {
				return this.storage;
			},
			put: function(recipes) {
				this.storage = recipes;
			}
		});
	}));


	beforeEach(inject(function($controller, $rootScope,recipeStorage) {
	    scope = $rootScope.$new();

	    recipeCtrl = $controller('RecipeCtrl', {
	        $scope: scope,
	        recipeStorage:recipeStorage
	    });
	}));

	describe('RecipeCtrl',function() {
		it('adding a new recipe blanks out recipe name',function() {				
			scope.newRecipeName = 'mynewrecipe';
			scope.addRecipe();
			expect(scope.newRecipeName).toBe('');
		});
		it('adding a new recipe can be retreived',function() {
			scope.newRecipeName = 'mynewrecipe';
			scope.addRecipe();
			expect(scope.recipes.length).toBe(1);			
		});
	});

});
