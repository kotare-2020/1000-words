
exports.up = function(knex) {
  return knex.schema.createTable('rounds', (table) => {
      table.integer('player')
      table.string('round1', 50000)
      table.string('round2', 50000)
      table.string('round3', 50000)
      table.string('round4', 50000)
      table.string('round5', 50000)
      table.string('round6', 50000)
      table.string('round7', 50000)
      table.string('round8', 50000)
      table.string('round9', 50000)
      table.string('round10', 50000)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('rounds')
};
