'use strict';
const { enPassword } = require('../helpers/bcrypt')
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
      unique: true,
      allowNull: false,
      validate:{
        isEmail: {msg: 'email must be email'},
        notEmpty: {msg: 'email cannot be empty'},
        notNull: {msg: 'email must be filled'}
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        moreThan6(value){
          if(value.length < 6){
            throw new Error('password must be longer than 6 characters')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate(user,op){
        user.password = enPassword(user.password)
      }
    }
  });
  return User;
};