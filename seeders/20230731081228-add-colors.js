'use strict';

const colors = require('./20230731081228-add-colors.json');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'colors',
      colors,
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'colors',
      {
        name: colors.map(({ name }) => name)
      },
    );
  }
};
