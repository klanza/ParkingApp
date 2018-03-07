'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [{
      availability: '1',
      location_lat: '32.23746462118062',
      location_lng: '-110.94608253245707',
      address: '623 E. Euclid Ave.',
      price: '8.00',
      owner_username: 'blah@fakesite.com',
      updatedAt: '2018-03-02 04:25:37',
      createdAt: '2018-03-02 04:25:37',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  },
};
