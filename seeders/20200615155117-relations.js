'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('relation_wine_restaurants', [{
      wineId : "1",
	    restaurantId : "9"  
    },{
      wineId : "1",
	    restaurantId : "4"
    },{
      wineId : "1",
	    restaurantId : "11"
    },{
      wineId : "1",
	    restaurantId : "19"
    },{
      wineId : "2",
	    restaurantId : "1"
    },{
      wineId : "2",
	    restaurantId : "5"
    },{
      wineId : "2",
	    restaurantId : "16"
    },{
      wineId : "2",
	    restaurantId : "19"
    },{
      wineId : "3",
	    restaurantId : "2"
    },{
      wineId : "3",
	    restaurantId : "6"
    },{
      wineId : "3",
	    restaurantId : "10"
    },{
      wineId : "3",
	    restaurantId : "17"
    },{
      wineId : "4",
	    restaurantId : "3"
    },{
      wineId : "4",
	    restaurantId : "7"
    },{
      wineId : "4",
	    restaurantId : "12"
    },{
      wineId : "4",
	    restaurantId : "18"
    },{
      wineId : "5",
	    restaurantId : "8"
    },{
      wineId : "5",
	    restaurantId : "13"
    },{
      wineId : "5",
	    restaurantId : "14"
    },{
      wineId : "5",
	    restaurantId : "15"
    },{
      wineId : "6",
	    restaurantId : "1"
    },{
      wineId : "6",
	    restaurantId : "5"
    },{
      wineId : "6",
	    restaurantId : "9"
    },{
      wineId : "6",
	    restaurantId : "13"
    },{
      wineId : "7",
	    restaurantId : "2"
    },{
      wineId : "7",
	    restaurantId : "4"
    },{
      wineId : "7",
	    restaurantId : "10"
    },{
      wineId : "7",
	    restaurantId : "14"
    },{
      wineId : "8",
	    restaurantId : "3"
    },{
      wineId : "8",
	    restaurantId : "6" 
    },{
      wineId : "8",
	    restaurantId : "11"
    },{
      wineId : "8",
	    restaurantId : "15"
    },{
      wineId : "9",
	    restaurantId : "7"
    },{
      wineId : "9",
	    restaurantId : "12"
    },{
      wineId : "9",
	    restaurantId : "16"
    },{
      wineId : "10",
	    restaurantId : "8"
    },{
      wineId : "10",
	    restaurantId : "17"
    },{
      wineId : "10",
	    restaurantId : "18"
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('relation_wine_restaurants', null, {});
  }
};
