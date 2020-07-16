
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {player_id: 1, player_name: 'jayden', game_id: 1, color: "black"},
        {player_id: 2, player_name: 'rubin', game_id: 1, color: "black"},
        {player_id: 3, player_name: 'andy', game_id: 1, color: "black"},        
      ]);
    });
};
