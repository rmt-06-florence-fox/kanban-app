'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Tasks', 'UserId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Tasks', 'UserId')
  }
};
