
exports.up = function(knex) {
  return knex.schema.createTable('rounds', (table) => {
      table.integer('player')
      table.text('round1')
      table.text('round2')
      table.text('round3')
      table.text('round4')
      table.text('round5')
      table.text('round6')
      table.text('round7')
      table.text('round8')
      table.text('round9')
      table.text('round10')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('rounds')
};
