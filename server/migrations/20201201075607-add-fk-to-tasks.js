'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Tasks', // name of Source model
    'UserId', // name of the key we're adding 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
    );

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Tasks','UserId',{});
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
