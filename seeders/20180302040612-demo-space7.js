'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [{
      availability: '0',
      location_lat: '32.23164016079317',
      location_lng: '-110.94333915176946',
      address: '1916 E. 3rd St.',
      price: '20.00',
      owner_username: 'creeper@fakesite.com',
      updatedAt: '2018-03-02 04:14:29',
      createdAt: '2018-03-02 04:14:29',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  },
};
