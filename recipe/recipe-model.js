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
function getShoppingList(id) {
    return db('recipeingredients AS ri')
    .join('ingredients AS i','ri.ingredientId', 'i.id')
    .where('ri.recipeId', id)
    .select('i.ingredient', 'ri.measurement', 'ri.measurementType')
}
function getInstructions(id) {
    return db('recipes').select('steps').where({id});
}