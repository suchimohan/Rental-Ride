'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Cars', // table name
        'pickup_address', // new field name
        {
          type: Sequelize.STRING(800),
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'Cars', // table name
        'city', // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'Cars',
        'latitude',
        {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
      ),
      queryInterface.addColumn(
        'Cars',
        'longitude',
        {
          type: Sequelize.DECIMAL,
          allowNull: false,
        },
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Cars', 'pickup_address'),
      queryInterface.removeColumn('Cars', 'city'),
      queryInterface.removeColumn('Cars', 'latitude'),
      queryInterface.removeColumn('Cars', 'longitude'),
    ]);
  }
};
