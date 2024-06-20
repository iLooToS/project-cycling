'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          rating: 2,
          comment:'любимое время года - это лето3333',
          userId: 1,
          trailId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 2,
          comment:'любимое время года - это лето2222',
          userId: 1,
          trailId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 1,
          comment:'любимое время года - это лето111',
          userId: 1,
          trailId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 2,
          comment:'любимое время года - это лето2222',
          userId: 1,
          trailId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 2,
          comment:'любимое время года - это лето2222',
          userId: 1,
          trailId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 2,
          comment:'любимое время года - это лето2222',
          userId: 1,
          trailId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};
