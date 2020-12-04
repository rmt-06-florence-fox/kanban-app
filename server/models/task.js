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
    }
  };
  Task.init({
    title: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:'Description can\'t be empty'
        },
        len:{
          args:[10],
          msg:'Description Must be at least 10 characters'
        }
      }
    },
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};