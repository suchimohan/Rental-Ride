'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false
    } ,
    city: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    Address.hasMany(models.Car,{
      foreignKey:'carId'
    })
  };
  return Address;
};
