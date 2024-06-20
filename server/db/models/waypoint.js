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
    static associate({Route}) {
      this.belongsTo(Route, {foreignKey:'routeId'})
      // define association here
    }
  }
  Waypoint.init({
    latitude: {
      type: DataTypes.FLOAT
    },
    longitude: {
      type: DataTypes.FLOAT
    },
    sequence: {
      type: DataTypes.INTEGER
    }, 
    routeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Routes',
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