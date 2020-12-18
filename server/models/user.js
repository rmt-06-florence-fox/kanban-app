'use strict';
const {generatePassword} = require('../helpers/bcryptjs')
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
      User.hasMany(models.Task, {foreignKey : 'userId', sourceKey : 'id'})
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Must be an email'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [6],
          msg : "Minimun 6 characters"
        }
      }
    }
  }, {
    hooks : {
      beforeCreate : (user, options) => {
        user.password = generatePassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};