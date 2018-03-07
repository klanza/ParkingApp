'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [{
      availability: '1',
      location_lat: '32.23165299550048',
      location_lng: '-110.94341291251737',
      address: '1916 E. 3rd St.',
      price: '20.00',
      owner_username: 'creeper@fakesite.com',
      updatedAt: '2018-03-02 04:15:46',
      createdAt: '2018-03-02 04:15:46',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  },
};
