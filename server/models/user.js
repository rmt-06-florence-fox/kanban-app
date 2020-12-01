'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Task)
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : `Email is required`
        },
        isEmail : {
          msg : `Invalid email format`
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : `Password is required`
        }

      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};