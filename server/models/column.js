'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Column extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Column.hasMany(models.Task)
    }
  };
  Column.init({
    colName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Column name cannot be empty'
        },
        notNull: {
          msg: 'Column name cannot be null'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Column',
  });
  return Column;
};