
exports.up = function(knex, Promise) {
    return knex.schema.createTable('balloon', (table) =>{
    table.increments();
    table.text('name');
    table.text('imageUrl').notNullable();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('balloon');
  }
