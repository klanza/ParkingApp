'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [{
      availability: '1',
      location_lat: '32.233804476614445',
      location_lng: '-110.935713955979',
      address: '2448 E. 2nd St.',
      price: '4.00',
      owner_username: 'creeper@fakesite.com',
      updatedAt: '2018-03-02 04:11:35',
      createdAt: '2018-03-02 04:11:35',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  },
};
