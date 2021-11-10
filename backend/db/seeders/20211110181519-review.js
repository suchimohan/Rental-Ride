'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
        userId :2,
        carId :1,
        content : "Awesome trip. Great car. Great host."
      },
      {
        userId :3,
        carId :1,
        content : "The rental experience was super smooth! The car was so fun to drive! I can't wait to rent another"
      },
      {
        userId :1,
        carId :2,
        content: "Car in great condition."
      },
      {
        userId :3,
        carId :2,
        content: "Great car! Very clean and fast well not that I pushed it too the limits, but fun! Would totally rent it again."
      },
      {
        userId :1,
        carId :3,
        content: "Excellent car. Excellent service. Everything went great ! Definitely surpassed my expectations."
      },
      {
        userId :2,
        carId :3,
        content : "Awesome car. Very nice to drive. Very comfortable and quick."
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
