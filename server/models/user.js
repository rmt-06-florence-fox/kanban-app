'use strict';
const {
  Model
} = require('sequelize');
const Helper = require('../helpers');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  
    static associate(models) {
      // define association here
      User.hasMany(models.Task)
    }
  };
  User.init({
    email: {
      type : DataTypes.STRING,
      unique : true,
      validate : {
        isEmail : {
          msg : 'email must be in email format'
        },
        notEmpty : {
          msg : 'email cannot be empty'
        }

      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'password cannot be empty'
        },
        min : {
          args : [[6]],
          msg : 'passsword length must be more than 6 characters'
        }
      }
    
    }  
  }, {
    hooks : {
      beforeCreate(user, options){
        user.password = Helper.hashing(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};