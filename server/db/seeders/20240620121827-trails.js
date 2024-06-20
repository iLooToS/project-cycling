'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Trails',
      [
        {
          title: 'sunny Day',
          description:'любимое время года - это лето',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'rainy Day',
          description:'в дождь тоже здорово',       
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Winter Day',
          description:'бывает очень холодно',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trails', null, {});
  },
};