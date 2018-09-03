
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "balloon"; ALTER SEQUENCE balloon_id_seq RESTART WITH 4;')
    .then(function () {
      var balloons = [{
        id: 1,
        name: 'Birthday',
        imageUrl: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/balloon.png',
        user_id: 1
      }, {
        id: 2,
        name: 'Valentines',
        imageUrl: 'https://png.pngtree.com/element_origin_min_pic/16/07/08/20577f98bd697ee.jpg',
        user_id: 2
      },
      {
        id: 3,
        name: 'Huge',
        imageUrl: 'https://png.pngtree.com/element_origin_min_pic/00/00/07/125784a484a3530.jpg',
        user_id: 2
      }
    ];
      return knex('balloon').insert(balloons);
    });
};
