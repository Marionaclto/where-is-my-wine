'use strict';
module.exports = (sequelize, DataTypes) => {
  const restaurant = sequelize.define('restaurant', {
    name: DataTypes.TEXT,
    city: DataTypes.TEXT,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    phone: DataTypes.INTEGER
  }, {});
  restaurant.associate = function(models) {
    // associations can be defined here
  };
  return restaurant;
};