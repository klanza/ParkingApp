'use strict';
module.exports = (sequelize, DataTypes) => {
  let Space = sequelize.define('Space', {
    location_lat: DataTypes.DOUBLE,
    location_lng: DataTypes.DOUBLE,
    address: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    owner_username: DataTypes.STRING,
    bookedBy_username: DataTypes.STRING,
    time_booked: DataTypes.TIME,
    time_vacated: DataTypes.TIME,
    availability: DataTypes.BOOLEAN,
  }, {});
  Space.associate = function(models) {
    // associations can be defined here
  };
  return Space;
};
