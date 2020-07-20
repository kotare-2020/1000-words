
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
        round2: '{\"attrs\":{\"width\":300,\"height\":400},\"className\":\"Stage\",\"children\":[{\"attrs\":{},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"stroke\":\"#000000\",\"strokeWidth\":5,\"points\":[71.6640625,285.79296875,71.4140625,272.1953125,72.70703125,262.46875,76.7890625,245.30859375,80.58984375,230.8515625,83.85546875,213.69140625,88.92578125,195.09375,94.3359375,173.44921875,100.84375,150.1953125,107.3515625,126.94140625,113.859375,104.6171875,121.296875,82.29296875,125.18359375,73.21484375,133.04296875,53.99609375,14..."', 
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
