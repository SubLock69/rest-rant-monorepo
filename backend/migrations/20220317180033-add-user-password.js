'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('users', 'password_digest', {
      type: Sequelize.DataTypes.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('users', 'password_digest');
  }
};
