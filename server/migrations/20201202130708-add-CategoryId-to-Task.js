'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Tasks", "CategoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Categories",
          key: "id"
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Tasks", "CategoryId", {});
  }
};
