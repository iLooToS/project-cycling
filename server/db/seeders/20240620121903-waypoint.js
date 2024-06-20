'use strict';
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Waypoints',
      [
        {
          latitude: 40.7128,
          longitude: -74.0060,
          sequence: 1,
          trailId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          latitude: 34.0522,
          longitude: -118.2437,
          sequence: 2,      
          trailId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          latitude: 51.5074,
          longitude:-0.1278,
          sequence: 1,      
          trailId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },     {
          latitude: 51.5074,
          longitude: 48.8566,
          sequence: 2,      
          trailId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          latitude: 40.8128,
          longitude: -74.9060,
          sequence: 1,
          trailId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          latitude: 34.8522,
          longitude: -118.9437,
          sequence: 2,      
          trailId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Waypoints', null, {});
  },
};