
exports.up = function(knex) {
  return knex.schema.createTable('rounds', (table) => {
      table.integer('player')
      table.string('round1')
      table.string('round2')
      table.string('round3')
      table.string('round4')
      table.string('round5')
      table.string('round6')
      table.string('round7')
      table.string('round8')
      table.string('round9')
      table.string('round10')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('rounds')
};
