'use strict';
const data = require('../organization.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   for(let i = 0; i < data.length; i++){
    data[i].updatedAt = new Date(),
    data[i].createdAt = new Date()
  }
  await queryInterface.bulkInsert('Organizations', data)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null)
  }
};
