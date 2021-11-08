'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    numberOfSeates: DataTypes.INTEGER,
    features: DataTypes.STRING,
    rules: DataTypes.STRING,
    fuelType: DataTypes.STRING,
    licensePlateNumber: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
    Car.belongsTo(models.User,{
      foreignKey: 'userId'
    })
  };
  return Car;
};
