'use strict';

const categories = require('../categories.json')

categories.forEach(element => {
  element.createdAt = new Date()
  element.updatedAt = new Date()
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', categories, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {})
  }
};
