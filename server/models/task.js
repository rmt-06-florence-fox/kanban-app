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
          msg: "Title is required"
        }
      }
    },
    description: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Description is required"
        }
      }
    },
    point: {
      type : DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Point is required"
        },
        notNull: {
          msg: "Point is required"
        }
      }
    },
    assignedto: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Assigned To is required"
        }
      }
    },
    status: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Status is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};