'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'userName',{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'userName')
  }
};
