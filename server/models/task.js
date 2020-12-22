'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
  
    static associate(models) {
      // define association here
      Task.belongsTo(models.User)
      Task.belongsTo(models.Column)
    }
  };
  Task.init({
    title: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    ColumnId: DataTypes.INTEGER
  }, {
    hooks : {
      beforeCreate(task, option){
        if(!task.ColumnId) task.ColumnId = 1
      }
    },
    sequelize,
    modelName: 'Task',
  });
  return Task;
};