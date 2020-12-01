'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Users', {
      fields: ['email'],
      type: 'unique',
      name: 'add-unique-constraint-to-email'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Users', 'add-unique-constraint-to-email', {})
  }
};
