
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rounds').del()
    .then(function () {
      // Inserts seed entries
      return knex('rounds').insert([
        {
        player: 1,
        write_1: 'a naked sheep', 
        draw_1: 'picture of a sheep', 
        write_2: 'a dog', 
        draw_2: 'picture of a dog',
        write_3: 'a fat dog', 
        draw_3: 'picture of a cow',
        write_4: 'a cow eating grass', 
        draw_4: 'picture of a cow eating grass',
        write_5: 'a cow in long grass', 
        draw_5: 'lots of grass',
      },
      {
        player: 2,
        write_1: 'a hairy ant', 
        draw_1: 'picture of a ant', 
        write_2: 'a ant', 
        draw_2: 'picture of a catterpiller',
        write_3: 'grapes', 
        draw_3: 'picture of small grapes',
        write_4: 'tiney circles', 
        draw_4: 'picture of a tiny man',
        write_5: 'stick figure', 
        draw_5: 'a stick person',
      },
      {
        player: 3,
        write_1: 'flying potato', 
        draw_1: 'a picture of a bird', 
        write_2: 'a sea gull', 
        draw_2: 'picture of a piden',
        write_3: 'a bird pooping', 
        draw_3: 'a picutre bird poop',
        write_4: 'a mountan', 
        draw_4: 'a picture of a mountan',
        write_5: 'snowy mountan', 
        draw_5: 'snowy mountan',
      },
      ]);
    });
};
