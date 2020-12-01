'use strict';
const {
  Model
} = require('sequelize');
var bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }

    static associate(models) {
      // define association here
      User.hasMany(models.Task)
    }
  };
  User.init({
    firstName:{
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "First name cannot empty"
        }
      }
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email cannot empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password cannot empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook("beforeCreate", (instance, options) => {
    if(instance.lastName === "") {
      instance.lastName = instance.firstName
    }
  })

  User.addHook("beforeCreate", (instance, options) => {
    let hash = bcrypt.hashSync(instance.password, +process.env.HASH);
    instance.password = hash
    console.log(instance.password)
  })
  return User;
};