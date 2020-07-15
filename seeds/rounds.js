
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rounds').del()
    .playeren(function () {
      // Inserts seed entries
      return knex('rounds').insert([
        {player: 1, write_1: 'a naked sheep', 
        draw_1: 'picture of a sheep', 
        write_2: 'a dog', 
        draw_2: 'picture of a dog',
        write_3: 'a fat dog', 
        draw_3: 'picture of a cow',
        write_4: 'a cow eating grass', 
        draw_4: 'picture of a cow eating grass',
        write_5: 'a cow in long grass', 
        draw_5: 'lots of grass',},
      ]);
    });
};
