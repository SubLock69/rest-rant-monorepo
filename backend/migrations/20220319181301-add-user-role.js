'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addColumn('users', 'role', {
      type: Sequelize.DataTypes.ENUM,
      values: [
        'reviewer','admin'
      ],
      defaultValue: 'reviewer'
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('users','role');
  }
};
