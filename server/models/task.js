'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      this.belongsTo(models.User);
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
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Category is required."
        },
        notEmpty: {
          args: true,
          msg: "Category is required."
        }
      }
    },
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
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};