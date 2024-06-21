"use strict";
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Waypoints", [
      {
        latitude: 60.058777,
        longitude: 29.986789,
        sequence: 1,
        trailId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        latitude: 60.104495,
        longitude: 29.977353,
        sequence: 2,
        trailId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        latitude: 60.325850,
        longitude: 30.322273,
        sequence: 1,
        trailId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        latitude: 60.372156,
        longitude: 30.347676,
        sequence: 2,
        trailId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Waypoints", null, {});
  },
};
