'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [{
      availability: '1',
      location_lat: '32.22626659246105',
      location_lng: '-110.94967710922924',
      address: '1448 E. 7th St.',
      price: '8.00',
      owner_username: 'kenny@fakesite.com',
      updatedAt: '2018-03-02 04:07:17',
      createdAt: '2018-03-02 04:07:17',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  },
};
