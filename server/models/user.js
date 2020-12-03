'use strict';
const {hashing} = require('../helpers/bcrypt')
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: `Incorrect email format`
        },
        notEmpty: {
          msg: `Required email`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: `Required password`
        },
        len: {
          args: [5],
          msg: `Must greater than 5 characters`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate(user, opt) {
        user.password = hashing(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};