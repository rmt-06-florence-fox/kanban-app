'use strict';
const {encodePassword} = require('../helpers/bcrypt')
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
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email must not be empty'
        },
        isEmail: {
          args: true,
          msg: 'Email must be an email formatted'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password must not be empty'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (data, opt) => {
        data.password = encodePassword(data.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};