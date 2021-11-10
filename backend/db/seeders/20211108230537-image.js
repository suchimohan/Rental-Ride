'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
        carId:1,
        imageURL:'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/kEZnZQ0ySj2hbLU0f9bHVQ.1440x700.jpg'
      },
      {
        carId:1,
        imageURL:'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/9bpM6s-ITyWSyUpuKF9WlQ.1440x700.jpg'
      },
      {
        carId:2,
        imageURL:'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/oXsGqVa0SDaXLGLI1T_HuA.1440x700.jpg'
      },
      {
        carId:2,
        imageURL:'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/lY4XqkfQQ5yGKCXq_Ri6zQ.1440x700.jpg'
      },
      {
        carId:3,
        imageURL:'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/UEwyvYjbRx-1fLptXJ0p6w.1440x700.jpg'
      },
      {
        carId:3,
        imageURL:'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/YZ7DutZBSre5z7dz3c3XVw.1440x700.jpg'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};

