const bcrypt = require('bcryptjs')

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
      User.hasMany(models.Task)
    }
  };
  User.init({
    name: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       isEmpty: {
        msg: 'Name cannot be empty'
       }
     }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already been used'
      },
      validate: {
        isEmail: {
          msg: 'Please enter correct email'
        },
        notEmpty: {
          msg: 'Email cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Please enter your password'
        }
      }
    },
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, options) => {
    const salt = bcrypt.genSaltSync(9);
    const hash = bcrypt.hashSync(instance.password, salt)

    instance.password = hash
  })
  return User;
};