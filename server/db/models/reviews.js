'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Trail}) {
      this.belongsTo(Trail, { foreignKey: 'trailId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Review.init({
    rating: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.TEXT
    } ,
     userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    trailId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Trails',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};