'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"New York",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Seattle",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Charleston",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Las Vegas",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"San Francisco",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"New Orleans",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Las Vegas",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Palm Springs",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"San Diego",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Sedona",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Honolulu",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Pheonix",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Miami",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Boston",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Orlando",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Portland",
        profilePhotoURL:faker.internet.avatar(),
      },
      {
        email:faker.internet.email(),
        username:faker.name.firstName(),
        hashedPassword:bcrypt.hashSync(faker.internet.password()),
        city:"Los Angeles",
        profilePhotoURL:faker.internet.avatar(),
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});

  }
};
