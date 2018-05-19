'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.addColumn('Categories', 'createdAt', Sequelize.DATE, { defaultValue: Sequelize.NOW });
        queryInterface.addColumn('Categories', 'updatedAt', Sequelize.DATE, { defaultValue: Sequelize.NOW });
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.removeColumn('Categories', 'createdAt');
        queryInterface.removeColumn('Categories', 'updatedAt');
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};