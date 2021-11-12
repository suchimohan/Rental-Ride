'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          userId :1,
          carId :4,
          content : "Great car, very easy!"
        },
        {
          userId :6,
          carId :4,
          content : "I will always rent from them"
        },
        {
          userId :7,
          carId :5,
          content : "Very clean car.Highly recommend"
        },
        {
          userId :3,
          carId :5,
          content : "Easy riding car with good gas mileage."
        },
        {
          userId :1,
          carId :6,
          content : "Hands down the most perfect and smooth experience."
        },
        {
          userId :8,
          carId :6,
          content : "Car was clean and super fun! Will definitely book again!"
        },
        {
          userId :1,
          carId :7,
          content : "Everything was perfect and had a great trip"
        },
        {
          userId :4,
          carId :7,
          content : "By far one of my favorite cars. "
        },
        {
          userId :5,
          carId :8,
          content : "Loved this car."
        },
        {
          userId :9,
          carId :8,
          content : "This is the one, the best."
        },
        {
          userId :12,
          carId :9,
          content : "Awesome trip. Great car. Great host."
        },
        {
          userId :20,
          carId :9,
          content : "Fun car!"
        },
        {
          userId :1,
          carId :10,
          content : "This car is too freaking cool"
        },
        {
          userId :3,
          carId :10,
          content : "Car was as described"
        },
        {
          userId :6,
          carId :11,
          content : "Great. Trip. Was exactly as advertised."
        },
        {
          userId :7,
          carId :11,
          content : "Car was clean and drove fine. "
        },
        {
          userId :11,
          carId :12,
          content : "Car was clean and ready to go."
        },
        {
          userId :10,
          carId :12,
          content : "Awesome trip. Great car. Great host."
        },
        {
          userId :14,
          carId :13,
          content : "Awesome trip. Great car. Great host."
        },
        {
          userId :9,
          carId :13,
          content : "Fantastic renter. Great car. Would highly recommend to anyone"
        },
        {
          userId :1,
          carId :14,
          content : "Awesome experience!"
        },
        {
          userId :9,
          carId :14,
          content : "Awesome trip. Great car. Great host."
        },
        {
          userId :5,
          carId :15,
          content : "Really beautiful car."
        },
        {
          userId :1,
          carId :15,
          content : "Nice car but was dirty, stunk of stale smoke when I picked it up."
        },
        {
          userId :7,
          carId :16,
          content : "Great service and great car would definitely rent again"
        },
        {
          userId :8,
          carId :16,
          content : "Well maintained"
        },
        {
          userId :1,
          carId :17,
          content : "Awesome trip. Great car. Great host."
        },
        {
          userId :5,
          carId :17,
          content : "Beautiful, fun car and an overall great experience."
        },
        {
          userId :6,
          carId :18,
          content : "Great service, highly recommended. Will rent again in the future!"
        },
        {
          userId :10,
          carId :18,
          content : "Great never bad experience"
        },
        {
          userId :11,
          carId :19,
          content : "Awesome trip. Great car. Great host."
        },
        {
          userId :1,
          carId :19,
          content : "Great value great customer service and communication! Will use again"
        },
        {
          userId :4,
          carId :20,
          content : "I will always rent from the host"
        },
        {
          userId :6,
          carId :20,
          content : "Great car, very easy!"
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});

  }
};
