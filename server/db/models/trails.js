'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,Waypoint, Review}) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Waypoint, {foreignKey:'trailId'})
      this.hasMany(Review, {foreignKey: 'trailId'} )


      

      // define association here
    }
  }
  Trail.init({
    title: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'Trail',
  });
  return Trail;
};