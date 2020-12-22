'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addConstraint('Tasks', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'add_constraint_to_userId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Tasks', 'add_constraint_to_userId', {})
  } 
};
