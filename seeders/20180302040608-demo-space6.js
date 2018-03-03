'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces', [{
      availability: '1',
      location_lat: '32.23164657814706',
      location_lng: '-110.94326404991705',
      address: '1916 E. 3rd St.',
      price: '20.00',
      owner_username: 'creeper@fakesite.com',
      updatedAt: '2018-03-02 04:13:26',
      createdAt: '2018-03-02 04:13:26',
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  },
};
