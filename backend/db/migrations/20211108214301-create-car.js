'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users"
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      model: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numberOfSeats: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      features: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rules: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fuelType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      licensePlateNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(7,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cars');
  }
};
