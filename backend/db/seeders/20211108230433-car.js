'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cars', [
        {
        userId : 1,
        name : 'Tesla',
        model : 'Model S 2013',
        numberOfSeats : 5,
        features :'Automatic transmission , Heated seats',
        rules : 'No Smoking',
        fuelType : 'Electric',
        licensePlateNumber : 'LKS1234',
        price : 108
      },
      {
        userId : 2,
        name : 'Subaru Legacy',
        model : '2008',
        numberOfSeats : 5,
        features :'Automatic transmission , All-wheel drive',
        rules : 'No Pets',
        fuelType : 'Gas (Regular)',
        licensePlateNumber : 'ABC345',
        price : 45
      },
      {
        userId : 3,
        name : 'BMW 2',
        model : 'Series 2015',
        numberOfSeats : 4,
        features :'Sunroof , All-wheel drive',
        rules : 'No eating inside the car',
        fuelType : 'Gas (Premium)',
        licensePlateNumber : 'GHK390',
        price : 90
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Cars', null, {});

  }
};
