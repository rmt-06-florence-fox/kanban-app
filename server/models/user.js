'use strict';
const helper = require('../helpers/helper.js')

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
      User.hasMany(models.Task, {foreignKey: 'UserId'})
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Username must not be empty !`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Email must not be empty !`
        },
        isEmail: {
          args: true,
          msg: `Email must be in valid format !`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Password must not be empty !`
        },
        len: {
          args: [6],
          msg: `Minimum password length are 6 characters !`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(instance, options) {
        instance.password = helper.encryptPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};