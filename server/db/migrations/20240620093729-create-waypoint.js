'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Waypoints', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      longitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      sequence: {
        allowNull: false,
        type: Sequelize.INTEGER
      }, 
      trailId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Trails',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('Waypoints');
  }
};