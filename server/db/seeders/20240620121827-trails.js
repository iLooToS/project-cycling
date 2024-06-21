'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Trails',
      [
        {
          title: 'Сестрорецкий трип',
          description:'Этот маршрут хорошо подойдёт для начинающих.',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Лемболовская дорога',
          description:'Данный маршрут порадует вас прекрасными видами на озеро.',       
          userId: 2,
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