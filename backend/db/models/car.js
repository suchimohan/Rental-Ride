'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numberOfSeats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    features: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rules: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    licensePlateNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
    },
    pickup_address: {
      type: DataTypes.STRING(800),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
    Car.hasMany(models.Image,{
      foreignKey: 'carId',
      onDelete: 'CASCADE',
      hooks: true
    });
    Car.hasMany(models.Review,{
      foreignKey: 'carId',
      onDelete: 'CASCADE',
      hooks: true
    });
    Car.belongsTo(models.User,{
      foreignKey: 'userId'
    });
  };
  return Car;
};
