
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {player_id: 1, player_name: 'jayden'},
        {player_id: 2, player_name: 'rubin'},
        {player_id: 3, player_name: 'andy'},        
        {player_id: 4, player_name: 'nick'},
        {player_id: 5, player_name: 'marta'}
      ]);
    });
};
