'use strict';
const {
  Model
} = require('sequelize');
const passHelper = require('../helpers/passhelper')
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail:{
          args: true,
          msg : "must be a valid email address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args : true,
          msg : "can not be empty"
        }
      }
    }
  }, {
    hooks:{
      beforeCreate: (user,options)=>{
        user.password = passHelper.converPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};