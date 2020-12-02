'use strict';
const { getHash } = require ('../helpers/helper')

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
      User.belongsTo(models.Organization)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Username can't be empty`
        },
        notNull: {
          msg: `Username can't be empty`
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: `Please enter valid email address`
        },
        notEmpty: {
          msg: `Please enter valid email address`
        },
        isEmail: {
          msg: `Please enter valid email address`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Password can't be empty`
        },
        notNull: {
          msg: `Password can't be empty`
        },
        minSix (value) {
          if (value.length < 6) {
            throw new Error ('Password must be at least 6 characters')
          }
        }
      }
    },
    OrganizationId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = getHash(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};