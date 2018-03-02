'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [{
      availability: '1',
      location_lat: '32.226042493705116',
      location_lng: '-110.94883757780758',
      address: '1518 E. 7th St.',
      price: '6.00',
      owner_username: 'chris@fakesite.com',
      updatedAt: '2018-03-02 03:40:16',
      createdAt: '2018-03-02 03:40:16',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  },
};
