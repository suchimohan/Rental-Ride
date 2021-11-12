'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cars', [
        {
          userId : 4,
          name : 'Ford Fusion',
          model : '2017',
          numberOfSeats : 5,
          features :'Automatic transmission , Android Auto',
          rules : 'No Pets',
          fuelType : 'Gas (Regular)',
          licensePlateNumber : 'ASD123',
          price : 60
        },
        {
          userId : 5,
          name : 'Ford Mustang',
          model : '2015',
          numberOfSeats : 4,
          features :'Convertible',
          rules : 'No offroading',
          fuelType : 'Gas',
          licensePlateNumber : 'YUI124',
          price : 95
          },
          {
            userId : 6,
            name : 'Tesla',
            model : 'Model 3 2018',
            numberOfSeats : 5,
            features :'Blind spot warning, Backup camera',
            rules : 'No Pets',
            fuelType : 'Electric',
            licensePlateNumber : 'DDF156',
            price : 120
            },
            {
              userId : 7,
              name : 'BMW i8',
              model : '2016',
              numberOfSeats : 4,
              features :'Keyless entry, Blind spot warning',
              rules : 'No Pets, No smoking',
              fuelType : 'Hybrid (Premium)',
              licensePlateNumber : 'POI456',
              price : 175
              },
            {
              userId : 8,
              name : 'Porsche 911',
              model : '2008',
              numberOfSeats : 4,
              features :'Heated seats,Convertible',
              rules : 'No Rules, Enjoy',
              fuelType : 'Gas (Premium)',
              licensePlateNumber : 'YHN789',
              price : 150
              },
            {
              userId : 9,
              name : 'Mercedes-Benz E-Class',
              model : "2010",
              numberOfSeats : 4,
              features :'Toll pass, Sunroof',
              rules : 'No Pets',
              fuelType : 'Gas (Premium)',
              licensePlateNumber : 'HJK908',
              price : 60
              },
            {
              userId : 10,
              name : 'Nissan Versa ',
              model : '2018',
              numberOfSeats : 5,
              features :'Automatic transmission , Child Seat',
              rules : 'No smoking',
              fuelType : 'Gas (Regular)',
              licensePlateNumber : 'ERT456',
              price : 45
            },
            {
              userId : 11,
              name : 'Lamborghini Huracan',
              model : '2015',
              numberOfSeats : 2,
              features :'Automatic transmission , Heated seats',
              rules : 'No Smoking, Premium Gas only',
              fuelType : 'Gas (Premium)',
              licensePlateNumber : 'IOP901',
              price : 700
              },
            {
              userId : 12,
              name : 'Subaru WRX',
              model : '2018' ,
              numberOfSeats : 5,
              features :'Manual transmission',
              rules : 'No Smoking',
              fuelType : 'Gas (Premium)',
              licensePlateNumber : 'HGF567',
              price : 85
              },
            {
              userId : 13,
              name : 'Jeep Renegade',
              model : '2016',
              numberOfSeats : 5,
              features :'Automatic transmission',
              rules : 'No Smoking',
              fuelType : 'Gas (Regular)',
              licensePlateNumber : 'DFG789',
              price : 50
              },
            {
              userId : 14,
              name : 'Nissan Sentra',
              model : '2018' ,
              numberOfSeats : 5,
              features :'Automatic transmission , Backup Camera',
              rules : 'No Smoking',
              fuelType : 'Gas (Regular)',
              licensePlateNumber : 'QWE123',
              price : 50
              },
            {
              userId : 15,
              name : 'Toyota Camry',
              model : '2017' ,
              numberOfSeats : 5,
              features :'Automatic transmission',
              rules : 'No Pets',
              fuelType : 'Gas (Regular)',
              licensePlateNumber : 'ASD789',
              price : 50
              },
            {
              userId : 16,
              name : 'BMW M2',
              model : '2018' ,
              numberOfSeats : 4,
              features :'Automatic transmission, Android Auto',
              rules : 'No Pets, No smoking',
              fuelType : 'Gas (Premium)',
              licensePlateNumber : 'RET567',
              price : 87
              },
            {
              userId : 17,
              name : 'Mercedes-Benz E-Class',
              model : "2012" ,
              numberOfSeats : 4,
              features :'Automatic transmission , Android Auto',
              rules : 'No Pets',
              fuelType : 'Gas (Premium)',
              licensePlateNumber : 'IJM897',
              price : 65
              },
            {
              userId : 18,
              name : 'Lamborghini Huracan',
              model : '2017',
              numberOfSeats : 2,
              features :'Automatic transmission , Convertible',
              rules : 'No Pets, No Smoking',
              fuelType : 'Gas',
              licensePlateNumber : 'TIK456',
              price : 900
              },
            {
              userId : 19,
              name : 'Tesla Model S',
              model : '2013',
              numberOfSeats : 5,
              features :'Automatic transmission',
              rules : 'No Food or Alcohol',
              fuelType : 'Electric',
              licensePlateNumber : 'HKD367',
              price : 110
              },
            {
              userId : 20,
              name : 'Ford Fusion',
              model : '2017',
              numberOfSeats : 5,
              features :'Automatic transmission',
              rules : 'No Smoking',
              fuelType : 'Gas (Regular)',
              licensePlateNumber : 'OPW109',
              price : 46
              },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cars', null, {});

  }
};
