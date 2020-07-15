
exports.up = function(knex) {
  return knex.schema.createTable('rounds', (table) => {
      table.integer('player')
      table.string('write_1')
      table.string('draw_1')
      table.string('write_2')
      table.string('draw_2')
      table.string('write_3')
      table.string('draw_3')
      table.string('write_4')
      table.string('draw_4')
      table.string('write_5')
      table.string('draw_5')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('rounds')
};
