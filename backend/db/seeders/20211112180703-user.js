'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
      {
        email:"john@john.com",
        username:"John" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"New York",
        profilePhotoURL:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        email:"oscar@oscar.com" ,
        username:"Oscar" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"Seattle",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/57.jpg",
      },
      {
        email:"ryan@ryan.com" ,
        username:"Ryan" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"New York",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/88.jpg",
      },
      {
        email:"zoey@zoey.com" ,
        username:"Zoey" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"Las Vegas",
        profilePhotoURL:"https://randomuser.me/api/portraits/women/42.jpg",
      },
      {
        email:"alexa@alexa.com" ,
        username:"Alexa" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"San Francisco",
        profilePhotoURL:"https://randomuser.me/api/portraits/women/87.jpg",
      },
      {
        email:"ola@ola.com" ,
        username:"Ola" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"San Francisco",
        profilePhotoURL:"https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        email:"ray@ray.com" ,
        username:"Ray" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"Las Vegas",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/74.jpg",
      },
      {
        email:"vince@vince.com" ,
        username:"Vince" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"San Francisco",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/41.jpg",
      },
      {
        email:"shanny@shanny.com" ,
        username:"Shanny" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"San Jose",
        profilePhotoURL:"https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        email:"augst@hotmain.com" ,
        username:"Augustus" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"Pheonix",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/56.jpg",
      },
      {
        email:"leif@leif.com" ,
        username:"Leif" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"Pheonix",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/58.jpg",
      },
      {
        email:"arnaldo@hotmain.com" ,
        username:"Arnaldo" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"Pheonix",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/48.jpg",
      },
      {
        email:"tom@tom.com" ,
        username:"Tom" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"Miami",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/0.jpg",
      },
      {
        email:"leo@leo.com" ,
        username:"Leo" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"Miami",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/65.jpg",
      },
      {
        email:"jocelyn@jocelyn.com" ,
        username:"Jocelyn" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"Miami",
        profilePhotoURL:"https://randomuser.me/api/portraits/women/35.jpg",
      },
      {
        email:"nate@nate.com" ,
        username:"Nathanial" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"New York",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/50.jpg",
      },
      {
        email:"will@will.com" ,
        username:"Will" ,
        hashedPassword:bcrypt.hashSync('password'),
        city:"San Diego",
        profilePhotoURL:"https://randomuser.me/api/portraits/men/3.jpg",
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Users', null, {});

  }
};
