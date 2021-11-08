'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    carId: DataTypes.INTEGER,
    imageURL: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Car, {
      foreignKey: 'carId'
    })
  };
  return Image;
};
