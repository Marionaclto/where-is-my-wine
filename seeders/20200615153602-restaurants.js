'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('restaurants', [{
      name: "Can Xapes",
      city: "Cornellà del Terri",
      latitude: 42.089291,
      longitude: 2.815441,
      phone: 972284301
    },{
      name: "Masia Can Ferran",
      city: "Sant Quirze del Vallès",
      latitude: 41.513584,
      longitude: 2.051672,
      phone: 936991763
    },{
      name: "Restaurant Atípic",
      city: "Agramunt",
      latitude: 41.788622,
      longitude: 1.098143,
      phone: 687861219
    },{
      name: "Lo Ponts Restaurant",
      city: "Ponts",
      latitude: 41.912864,
      longitude: 1.188338,
      phone: 973460017
    },{
      name: "El Xalet",
      city: "Ponts",
      latitude: 41.908868,
      longitude: 1.192585,
      phone: 973460727
    },{
      name: "La Dolceta",
      city: "Lleida",
      latitude: 41.640022,
      longitude: 0.605175,
      phone: 973231364
    },{
      name: "Restaurant Rialb",
      city: "Gualter",
      latitude: 41.933286,
      longitude: 1.196183,
      phone: 973462038
    },{
      name: "El Celler de Lleida",
      city: "Lleida",
      latitude: 41.611546,
      longitude: 0.619587,
      phone: 973289132
    },{
      name: "Sopa de Pedres Restaurant",
      city: "Barcelona",
      latitude: 41.396116,
      longitude: 2.168705,
      phone: 628769114
    },{
      name: "La Bicicleta",
      city: "Barcelona",
      latitude: 41.40477,
      longitude: 2.155861,
      phone: 931281416
    },{
      name: "Mooma",
      city: "Girona",
      latitude: 42.000799,
      longitude: 3.13333,
      phone: 872026088
    },{
      name: "Crêperie Bretonne",
      city: "Girona",
      latitude: 41.98496,
      longitude: 2.825106,
      phone: 972218120
    },{
      name: "Cafè le Bistrot",
      city: "Girona",
      latitude: 41.98492,
      longitude: 2.826116,
      phone: 972218803
    },{
      name: "Local Social l'Escola",
      city: "La Pera",
      latitude: 42.020509,
      longitude: 2.973381,
      phone: 972488114
    },{
      name: "Restaurant Cúrcuma",
      city: "Girona",
      latitude: 41.982521,
      longitude: 2.824718,
      phone: 972416363
    },{
      name: "El Racó de l'Epi",
      city: "Platja d'Aro",
      latitude: 41.815941,
      longitude: 3.065187,
      phone: 972817026
    },{
      name: "La Cuina de Can Simón",
      city: "Tossa de Mar",
      latitude: 41.71656,
      longitude: 2.932408,
      phone: 972341269
    },{
      name: "Restaurant Els Tinars",
      city: "Llagostera",
      latitude: 41.827554,
      longitude: 2.953753,
      phone: 972830626
    },{
      name: "Restaurant Les Cols",
      city: "Olot",
      latitude: 42.194499,
      longitude: 2.500982,
      phone: 972269209
    }]);
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('restaurant', null, {});
  }
};
