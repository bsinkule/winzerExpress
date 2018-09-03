
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3;')
    .then(function () {
      var users = [{
        id: 1,
        email: 'sam@gmail.com',
        bio: 'Hi my name is Sam'
      }, {
        id: 2,
        email: 'alex@gmail.com',
        bio: 'Hi my name is Alex'
      }];
      return knex('user').insert(users);
    });
};
