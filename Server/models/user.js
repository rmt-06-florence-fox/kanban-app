'use strict';
const {
  Model
} = require('sequelize');
const Helper = require('../helper/helper')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task)
    }
  };
  User.init({
    name:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: `Username can't be empty`
        }
      }
    },
    email:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: `Email can't be empty`
        },
        isEmail:{
          args: true,
          msg: `Email must be formatted example@mail.com`
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          args: true,
          msg: `Username can't be empty`
        },
        len:{
          args:[6],
          msg: `Password must be contain minimum 6 characters`
        }
      }
    }
  }, {
    hooks:{
      beforeCreate(instance, options){
        instance.password = Helper.generatePassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};