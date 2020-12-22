'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Tasks', {
      fields: ['ColumnId'],
      type: 'foreign key',
      name: 'add_constraint_to_columnId',
      references: { //Required field
        table: 'Columns',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Tasks', 'add_constraint_to_columnId', {})
  }
};
