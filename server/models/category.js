'use strict';
console.log('start in model category');
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.User, {
        through: models.Task
      })
    }
  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Field name cannot be empty'
        },
        notEmpty: {
          msg: 'field name is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};

console.log('end in model category');