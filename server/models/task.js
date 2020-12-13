'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.Category);
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Title is required."
        },
        notEmpty: {
          args: true,
          msg: "Title is required."
        }
      }
    },
    description: DataTypes.STRING,
    due_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Due date is required."
          },
          notEmpty: {
            args: true,
            msg: "Due date is required."
          },
          isAfter: {
            args: (new Date).toString(),
            msg: "Due date must be greater than today."
          }
        }
    },
    UserId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};