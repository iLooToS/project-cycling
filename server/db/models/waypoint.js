'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Waypoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Trail}) {
      this.belongsTo(Trail, {foreignKey:'trailId'})
      // define association here
    }
  }
  Waypoint.init({
    latitude: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    longitude: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    sequence: {
      allowNull: false,
      type: DataTypes.INTEGER
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
    modelName: 'Waypoint',
  });
  return Waypoint;
};