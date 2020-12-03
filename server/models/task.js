'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
  
    static associate(models) {
      // define association here
      Task.belongsTo(models.User)
    }
  };
  Task.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    UserId : DataTypes.INTEGER
    
  }, {
    hooks : {
      beforeCreate(task, option){
        if(!task.category) task.category = 'Back Log'
      }
    },
    sequelize,
    modelName: 'Task',
  });
  return Task;
};