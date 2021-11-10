'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        city: 'redmond',
        profilePhotoURL: 'https://cdn1.vectorstock.com/i/1000x1000/66/55/car-icon-vector-20996655.jpg'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        city: 'seattle',
        profilePhotoURL: 'https://cdn1.vectorstock.com/i/1000x1000/66/55/car-icon-vector-20996655.jpg'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        city: 'san jose',
        profilePhotoURL: 'https://cdn1.vectorstock.com/i/1000x1000/66/55/car-icon-vector-20996655.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};

