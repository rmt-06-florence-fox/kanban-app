'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: "username cannot be blank"
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: "email cannot be blank"
      },
    },
    password: {
      type: DataTypes.STRING, 
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};