'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Organizations', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'fk_userId',
      references: {
        table: 'Users',
        field: 'id'
      }, 
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    await queryInterface.addConstraint('Organizations', {
      fields: ['TaskId'],
      type: 'foreign key',
      name: 'fk_taskId',
      references: {
        table: 'Tasks',
        field: 'id'
      }, 
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Organizations', 'fk_userId', {})
    await queryInterface.removeConstraint('Tasks', 'fk_taskId', {})
  }
};
