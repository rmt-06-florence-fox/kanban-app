'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.Task);
    }
  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Name is required."
        },
        notEmpty: {
          args: true,
          msg: "Name is required."
        }
      }
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Color is required."
        },
        notEmpty: {
          args: true,
          msg: "Color is required."
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};