'use strict';
const { hash } = require('../helpers/bcrypt-pass')
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name is required!!'
        },
        notNull: {
          args: true,
          msg: 'Name is required!!'
        }
      }},
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email is required!!'
        },
        notNull: {
          args: true,
          msg: 'Email is required!!'
        },
        isEmail: {
          args: true,
          msg: 'Format email is required!!'
        }
      }},
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password is required!!'
        },
        notNull: {
          args: true,
          msg: 'Password is required!!'
        }
      }},
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((instance, option) => {
    instance.password = hash(instance.password)
  })
  
  return User;
};