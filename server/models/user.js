'use strict';
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
      type : DataTypes.STRING,
      unique : true,
      validate : {
        isEmail : {
          msg : 'email must be in email format'
        },

        notEmpty : {
          msg : 'email cannot be empty'
        }

      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'password cannot be empty'
        },
        min : {
          args : [[6]],
          msg : 'passsword length must be more than 6 characters'
        }
      }
    
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};