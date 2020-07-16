
exports.up = function(knex) {
  return knex.schema.createTable('players', (table) => {
      table.increments('player_id').primary()
      table.string('player_name')
      table.integer('game_id')
      table.string('color')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('players')
};
