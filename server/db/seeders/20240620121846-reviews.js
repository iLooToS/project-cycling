'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reviews',
      [
        {
          rating: 3,
          comment:'Хороший маршрут, прошлым летом были тут вместе с друзьями нам он очень понравился.',
          userId: 1,
          trailId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 2,
          comment:'Всей компанией рекомендуем этот маршрут, местные виды просто восхитительны!',
          userId: 2,
          trailId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 2,
          comment:'Лесная дорога для велосипедистов - настоящий рай для приключений! Живописные тропы, свежий воздух и природная красота вокруг создают неповторимую атмосферу.',
          userId: 1,
          trailId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: 2,
          comment:'Катание по лесной дороге предоставляет возможность насладиться тишиной и уединением, убегая от городской суеты и шума.',
          userId: 2,
          trailId: 2,
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
