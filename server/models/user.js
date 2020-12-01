'use strict';

const {getHashPassword} = require('../helper/encryptPass')
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
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'email require'
        },
        isEmail : {
          msg : 'please insert your correct email'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Please Insert Your Password'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((instance,options) =>{
    console.log('==================Instance')
    console.log(instance)

    instance.password = getHashPassword(instance.password)
  })
  
  return User;
};