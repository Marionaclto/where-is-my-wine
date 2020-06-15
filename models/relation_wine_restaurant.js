'use strict';
module.exports = (sequelize, DataTypes) => {
  const relation_wine_restaurant = sequelize.define('relation_wine_restaurant', {
    wineId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER
  }, {});
  relation_wine_restaurant.associate = function(models) {
    // associations can be defined here
  };
  return relation_wine_restaurant;
};