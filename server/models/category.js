'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Task)
    }
  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Category is already exist!!'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name is required!!'
        },
        notNull: {
          args: true,
          msg: 'Name is required!!'
        }
      }}
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};