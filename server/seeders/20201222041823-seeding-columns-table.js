'use strict';

const column = require('../models/column');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const columns = require('../initialData/columns.json')
    columns.forEach(col => {
      col.updatedAt = new Date()
      col.createdAt = new Date()
    })
    await queryInterface.bulkInsert('Columns', columns)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Columns', null)
  }
};
