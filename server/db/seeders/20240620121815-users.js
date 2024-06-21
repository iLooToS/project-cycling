'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Misha',
          email: 'misha@mail.ru',
          password: 'misha',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Olenka',
          email: 'olenka@mail.ru',
          password: 'olenka',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};