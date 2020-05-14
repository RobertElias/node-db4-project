
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipename: "Bacon Sandwich" , 
          steps: 'heat your pan on meduim high, grill the bacon, take bacon fat and cook four eggs, toast sourdough, place slice of cheese on sourdoub, place eggs on cheese, and two slices of bacon, then enjoy...'
        },
        {
          recipename: "Peanut Butter Sandwich" , 
          steps: 'Take 2 slices of bread, spread two oz of peanutbutter, then 1 tps of fig jam and spread on bread, then enjoy...'
        },
      ]);
    });
};
