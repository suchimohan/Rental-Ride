'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Addresses', [
      {
        carId:1,
        streetAddress:'1383 Kovar Road',
        city:'Cambridge',
        state:'Massachusetts',
        zipcode:'02141',
        latitude: null,
        longitude: null,
      },
      {
        carId:2,
        streetAddress:'4658 Raccoon Run',
        city:'Seattle',
        state:'Washington',
        zipcode:'98109',
        latitude: null,
        longitude: null,
      },
      {
        carId:3,
        streetAddress:'154 James Avenue',
        city:'Wichita',
        state:'Kansas',
        zipcode:'67202',
        latitude: null,
        longitude: null,
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Addresses', null, {});

  }
};
