
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'Eggs'},
        {ingredient: 'Bacon'},
        {ingredient: 'SourDough Bread'},
        {ingredient: 'Cheddar Cheese'},
        {ingredient: 'Peanut Butter'},
        {ingredient: 'Fig Jam'},
        {ingredient: 'Coconut Oil'},
        {ingredient: 'Coffee'}        
      ]);
    });
};
