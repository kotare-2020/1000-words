
exports.up = function(knex) {
  return knex.schema.createTable('game', (table) => {
      table.increments('game_id').primary()
      table.string('host')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('game')
};
