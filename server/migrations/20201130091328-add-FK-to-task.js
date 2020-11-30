'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Tasks', 'OrganizationId', {
      type: Sequelize.INTEGER,
      references : {
        model: {
          tableName: 'Organizations'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }),
    await queryInterface.addColumn('Tasks', 'CategoryId', {
      type: Sequelize.INTEGER,
      references : {
        model: {
          tableName: 'Categories'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }),
    await queryInterface.addColumn('Tasks', 'UserId', {
      type: Sequelize.INTEGER,
      references : {
        model: {
          tableName: 'Users'
        },
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Tasks', 'OrganizationId'),
    await queryInterface.removeColumn('Tasks', 'CategoryId'),
    await queryInterface.removeColumn('Tasks', 'UserId')
  }
};
