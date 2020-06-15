'use strict';
module.exports = (sequelize, DataTypes) => {
  const wine = sequelize.define('wine', {
    name: DataTypes.TEXT,
    classification: DataTypes.TEXT,
    description: DataTypes.TEXT,
    variety: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {});
  wine.associate = function(models) {
    // associations can be defined here
  };
  return wine;
};