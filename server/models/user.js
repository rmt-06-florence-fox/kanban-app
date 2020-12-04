'use strict';
const passwordHandler = require('../helpers/password')
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
      // define association here
      User.hasMany(models.Task)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already exist!'
      },
      validate: {
        notNull: {
          msg: 'Please input your username!'
        },
        notEmpty: {
          msg: 'Please input your username!'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email has been registered!'
      },
      validate: {
        notNull: {
          msg: 'Please input your email!'
        },
        notEmpty: {
          msg: 'Please input your email!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please input your password!'
        },
        notEmpty: {
          msg: 'Please input your password!'
        },
        len: {
          args: [6],
          msg: 'Password too short! Password length must be 6 characters minimum!'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, options) => {
    instance.password = passwordHandler.encrypt(instance.password)
  })
  return User;
};