'use strict';
const {
  Model
} = require('sequelize');
const Bcrypt = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Task)
      
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email has already registered'
      },
      validate: {
        notEmpty: {
          msg: 'email can not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password can not be empty'
        },
        len: {
          args: [5, 10],
          msg: 'password has to minimum 5 characters and maximum 10 characters'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = Bcrypt.hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};