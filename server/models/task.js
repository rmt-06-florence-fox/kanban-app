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
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Title is required"
        }
      }
    },
    description: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Description is required"
        }
      }
    },
    point: {
      type : DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Point is required"
        },
        notNull: {
          message: "Point is required"
        }
      }
    },
    assignedto: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Assigned To is required"
        }
      }
    },
    status: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Status is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};