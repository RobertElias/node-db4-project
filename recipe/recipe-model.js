const db = require('../data/db-config');

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
};

// `getRecipes()`: should return a list of all recipes in the database.
function getRecipes() {
	return db('recipes').select('*');
}

//`getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipeId) {
	return db('recipeingredients')
		.join('ingredients', 'id', 'recipeingredients.ingredientId')
		.select('*')
		.where('recipeId', recipeId);
}