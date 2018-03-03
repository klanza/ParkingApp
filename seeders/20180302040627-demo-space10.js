'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [{
      availability: '1',
      location_lat: '32.23746462118062',
      location_lng: '-110.94608253245707',
      address: '833 E. Helen St.',
      price: '4.00',
      owner_username: 'offspeedway@fakesite.com',
      updatedAt: '2018-03-02 04:20:48',
      createdAt: '2018-03-02 04:20:48',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  },
};
