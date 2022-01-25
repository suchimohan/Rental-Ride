'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        city: 'Seattle',
        profilePhotoURL: 'https://cdn1.vectorstock.com/i/1000x1000/66/55/car-icon-vector-20996655.jpg'
      },
      {
        email: 'marnie@aa.io',
        username: 'Marnie',
        hashedPassword: bcrypt.hashSync('password'),
        city: 'Seattle',
        profilePhotoURL: 'https://randomuser.me/api/portraits/men/33.jpg'
      },
      {
        email: 'bobbie@aa.io',
        username: 'Bobbie',
        hashedPassword: bcrypt.hashSync('password'),
        city: 'San Jose',
        profilePhotoURL: 'https://randomuser.me/api/portraits/men/16.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
