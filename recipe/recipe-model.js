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
