
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeingredients').insert([
        {recipeId: 1, ingredientId: 1, measurement: 2, measurementType: 'Whole', ingredientOrder: 1},
        {recipeId: 1, ingredientId: 2, measurement: 2, measurementType: 'pieces', ingredientOrder: 2},
        {recipeId: 1, ingredientId: 3, measurement: 2, measurementType: 'slices', ingredientOrder: 3},
        {recipeId: 1, ingredientId: 2, measurement: 1, measurementType: 'slices', ingredientOrder: 4},
        {recipeId: 2, ingredientId: 3, measurement: 2, measurementType: 'slices', ingredientOrder: 1},
        {recipeId: 2, ingredientId: 5, measurement: 2, measurementType: 'oz', ingredientOrder: 2},
        {recipeId: 2, ingredientId: 6, measurement: 2, measurementType: 'tps', ingredientOrder: 3},
   
      ]);
    });
};
