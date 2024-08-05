'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      att: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      def: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      str: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      spd: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      crit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      renameCounter: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pokemons');
  }
};