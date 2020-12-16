'use strict';

const { hashPass } = require("../helper/hashPassword")

const {
  Model
} = require('sequelize');
const { use } = require("../Routes");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, {
        foreignKey: "UserId",
        sourceKey: "id"
      })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Email can't be empty"
        },
        isEmail: {
          msg: "Email must be unique"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Password can't be empty"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, opt) => {
        user.password = hashPass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};