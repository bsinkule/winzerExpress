
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', (table) =>{
    table.increments();
    table.text('email').notNullable().unique();
    table.text('bio');
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
  }