'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
      {
        carId: 4,
        imageURL: "https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/bZyD7pMUSM2Wl7eCxg49uw.1440x700.jpg"
      },
      {
        carId: 4,
        imageURL: "https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/IG92-56mTiqlP73BXPfz0g.1440x700.jpg"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Images', null, {});

  }
};
