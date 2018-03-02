'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [{
      availability: '1',
      location_lat: '32.22610592436308',
      location_lng: '-110.94341291251737',
      address: '-110.94608253245707',
      price: '10.00',
      owner_username: 'uofafan@fakesite.com',
      updatedAt: '2018-03-02 04:18:01',
      createdAt: '2018-03-02 04:18:01',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  },
};
