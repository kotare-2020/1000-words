
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('rounds').del()
    .then(function () {
      // Inserts seed entries
      return knex('rounds').insert([
        {
        player: 1,
        round1: 'a naked sheep', 
        round2: 'picture of a sheep', 
        round3: 'a dog', 
        round4: 'picture of a dog',
        round5: 'a fat dog', 
        round6: 'picture of a cow',
        round7: 'a cow eating grass', 
        round8: 'picture of a cow eating grass',
        round9: 'a cow in long grass', 
        round10: 'lots of grass',
      },
      {
        player: 2,
        round1: 'a hairy ant', 
        round2: 'picture of a ant', 
        round3: 'a ant', 
        round4: 'picture of a catterpiller',
        round5: 'grapes', 
        round6: 'picture of small grapes',
        round7: 'tiney circles', 
        round8: 'picture of a tiny man',
        round9: 'stick figure', 
        round10: 'a stick person',
      },
      {
        player: 3,
        round1: 'flying potato', 
        round2: 'a picture of a bird', 
        round3: 'a sea gull', 
        round4: 'picture of a piden',
        round5: 'a bird pooping', 
        round6: 'a picutre bird poop',
        round7: 'a mountan', 
        round8: 'a picture of a mountan',
        round9: 'snowy mountan', 
        round10: 'snowy mountan',
      },
      ]);
    });
};
