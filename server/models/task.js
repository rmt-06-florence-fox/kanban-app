'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey:"UserId", targetKey:"id"})
    }
  };
  Task.init({
    title: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `title musn't be null`
        },
        notEmpty : {
          msg : `title musn't be empty`
        }
      }
    },
    category: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `category musn't be null`
        },
        notEmpty : {
          msg : `category musn't be empty`
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};