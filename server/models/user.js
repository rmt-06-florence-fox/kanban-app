'use strict';
console.log('start in model user');
const {hashPassword} = require('../helpers/bcrypt')
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Category, {
        through: models.Task
      })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "format email is required"
        },
        notEmpty: {
          msg: 'Field email is required'
        },
        notEmpty: {
          msg: 'Field email cannot be empty'
        }
        },
        unique: {
          msg: 'Email is already exists'
        }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 20],
          msg: 'password required 4 - 20 characters'
        },
        notEmpty: {
          msg: 'Field password is required'
        },
        notNull: {
          msg: 'Field password cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate', instance => {
    instance.password = hashPassword(instance.password)
  })

  return User;
};
console.log('end in model user');