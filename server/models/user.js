'use strict';
var bcrypt = require('bcryptjs');
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
      this.hasMany(models.Task)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'You need to provide a valid email'
        },
        notEmpty: {
          msg: 'Please provide your email address'
        },
        notNull: {
          msg: 'Please provide your email address'
        }
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please provide your email address'
        },
        notNull: {
          msg: 'Please provide your email address'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        var salt = bcrypt.genSaltSync(8);
        instance.password = bcrypt.hashSync(instance.password, salt);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};