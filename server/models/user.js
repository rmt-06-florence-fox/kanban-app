'use strict';

const {hash} = require('../helpers/encryption')

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
    }
  };
  User.init({
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          msg:'Please input email correctly'
        },
        notEmpty:{
          msg:'Email must be filled'
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[6],
          msg:'Password must be at least 6 characters'
        },
        notEmpty:{
          msg:"Password must be filled"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((instance,option) =>{
    instance.password = hash(instance.password)
  })

  return User;
};