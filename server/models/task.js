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
      Task.belongsTo(models.User)
      Task.belongsTo(models.Category)
    }
  };
  Task.init({
    Title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Title should not be empty"
        },
        notNull: {
          msg: "Title should not be empty"
        }
      }
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Due date should not be empty"
        },
        notNull: {
          msg: "Due date should not be empty"
        },
        isSmallerThanToday(value){
          if (value){
            let dateNow = new Date().toISOString()
            if (dateNow.split("T")[0] > value){
              throw new Error("Date should be greater than today")
            }
          }
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "CategoryId should not be empty"
        },
        notNull: {
          msg: "CategoryId should not be empty"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "UserId should not be empty"
        },
        notNull: {
          msg: "UserId should not be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};