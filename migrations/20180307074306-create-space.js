'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Spaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      location_lat: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    location_lng: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    owner_username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1],
        },
    },
    bookedBy_username: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    time_booked: {
        type: Sequelize.TIME,
        allowNull: true,
    },
    time_vacated: {
        type: Sequelize.TIME,
        allowNull: true,
    },
    availability: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Spaces');
  },
};
