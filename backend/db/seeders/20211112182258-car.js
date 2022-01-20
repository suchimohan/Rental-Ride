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
          price : 60,
          pickup_address: "John F. Kennedy International Airport, NY, USA",
          city: "New York",
          latitude: 40.641766,
          longitude: -73.780968,
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
          price : 95,
          pickup_address: "720 Lind Ave SW, Renton, WA 98057",
          city: "Seattle",
          latitude: 47.473170,
          longitude: -122.222580,
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
            price : 120,
            pickup_address: "Canandaigua Airport - KIUA, Canandaigua, NY, USA",
            city: "New York",
            latitude:42.907768 ,
            longitude: -77.318970,
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
              price : 175,
              pickup_address: "North Las Vegas Airport (VGT), Las Vegas, USA",
              city: "Las Vegas",
              latitude: 36.213257,
              longitude:-115.194572 ,
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
              price : 150,
              pickup_address: "San Francisco International Airport (SFO), USA",
              city: "San Francisco",
              latitude: 37.615223,
              longitude:-122.389977,
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
              price : 60,
              pickup_address: "5001 Junipero Serra Blvd, Colma, CA 94014",
              city: "San Francisco" ,
              latitude: 37.673740,
              longitude: -122.464150,
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
              price : 45,
              pickup_address: "McCarran International Airport (LAS), Las Vegas, NV, USA" ,
              city: "Las Vegas",
              latitude: 36.086010 ,
              longitude: -115.153969,
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
              price : 700,
              pickup_address: "Dolores St &, 19th St, San Francisco, CA 94114" ,
              city: "San Francisco",
              latitude: 37.759838 ,
              longitude:-122.425842 ,
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
              price : 85,
              pickup_address: "438 Coleman Ave, San Jose, CA 95110",
              city:"San Jose" ,
              latitude: 37.341213,
              longitude: -121.908585
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
              price : 50,
              pickup_address: "Phoenix Sky Harbor International Airport Rental Car Center, 1805 E Sky Harbor Cir S, Phoenix, AZ 85034" ,
              city: "Pheonix",
              latitude: 33.43025,
              longitude: -112.045052,
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
              price : 50,
              pickup_address: "1201 N Galvin Pkwy, Phoenix, AZ 85008",
              city: "Pheonix",
              latitude: 33.45726,
              longitude: -111.95164,
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
              price : 50,
              pickup_address: "30248002V, Chandler, AZ 85224",
              city: "Pheonix" ,
              latitude: 33.324113,
              longitude: -111.878217,
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
              price : 87,
              pickup_address:"Miami International Airport" ,
              city: "Miami",
              latitude: 25.794271,
              longitude: -80.264465,
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
              price : 65,
              pickup_address: "2400 S Bayshore Dr, Miami, FL 33133" ,
              city:"Miami" ,
              latitude: 25.735783,
              longitude: -80.228874,
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
              price : 900,
              pickup_address: "6030 SW 2nd St, Miami, FL 33144",
              city:"Miami" ,
              latitude: 25.768406,
              longitude: -80.310501,
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
              price : 110,
              pickup_address: "Greater Rochester International Airport, Rochester, NY, USA" ,
              city: "New York",
              latitude: 43.128002,
              longitude: -77.665474,
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
              price : 46,
              pickup_address:"San Diego International Airport (SAN), San Diego, CA, USA" ,
              city: "San Diego",
              latitude:32.731770,
              longitude:-117.197624,
              },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cars', null, {});

  }
};
