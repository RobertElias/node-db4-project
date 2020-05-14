exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipename', 128).notNullable();
        tbl.text('steps');
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient', 128).notNullable();
    })
    .createTable('recipesteps', tbl => {
          tbl.increments();
          tbl.string('stepdescription').notNullable();
          tbl.integer('recipeId')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recipes');
          tbl.integer('steporder').notNullable();
    })
    .createTable('recipeingredients', tbl => {
          tbl.increments();
          tbl.integer('recipeId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('recipes');
          tbl.integer('ingredientId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('ingredients');
          tbl.float('measurement').notNullable();
          tbl.string('measurementType').notNullable();  // t, T, Cup(s)
          tbl.integer('ingredientOrder')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipesteps')
      .dropTableIfExists('recipeingredients');
    
  };