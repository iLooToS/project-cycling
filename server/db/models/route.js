'use strict';
const {
  Model
} = require('sequelize');
const waypoint = require('./waypoint');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Review, Waypoint}) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Waypoint, {foreignKey:'routeId'})
      this.hasMany(Review, {foreignKey: 'routId'} )


      

      // define association here
    }
  }
  Route.init({
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
    modelName: 'Route',
  });
  return Route;
};