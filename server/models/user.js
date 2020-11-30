"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/passwordHandler");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: "username cannot be blank",
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: "email cannot be blank",
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCreate(instance, options) {
          instance.password = hash(instance.password)
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
