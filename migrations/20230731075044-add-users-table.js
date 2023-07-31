'use strict';
const TABLE_NAME = 'users';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      TABLE_NAME,
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        car_color_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('NOW()'),
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('NOW()'),
        }
      }
    );

    await queryInterface.addConstraint(
      TABLE_NAME,
      {
        fields: ['car_color_id'],
        type: 'foreign key',
        references: {
          table: 'colors',
          field: 'id',
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME);
  }
};
