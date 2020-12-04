'use strict';
const {
  Model
} = require('sequelize');

const {generatePassword} = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task);
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Email Required'
        },
        isEmail: {
          msg: 'Email must be an Email'
        },
        notNull: {
          msg: 'Email Required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password Required'
        },
        notNull: {
          msg: 'Password Required'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(instance, options){
        instance.password = generatePassword(instance.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};