'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Misha',
          email: 'mi@ru',
          password: 'misha',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Olenka',
          email: 'ol@ru',
          password: 'olenka',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kat',
          email: 'k@ru',
          password: 'kat',
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